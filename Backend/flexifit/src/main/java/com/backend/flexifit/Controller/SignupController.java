package com.backend.flexifit.Controller;

import com.backend.flexifit.Model.Signup;
import com.backend.flexifit.Model.Userdetail;
import com.backend.flexifit.Services.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") // Adjust this if your frontend runs on a different port
public class SignupController {

    @Autowired
    private SignupService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> addNewUser(@RequestBody Signup user) {
        try {
            // Check if the user already exists
            if (userService.findByEmail(user.getEmail()) != null) {
                return new ResponseEntity<>("Email already exists.", HttpStatus.CONFLICT);
            }
            Signup createdUser = userService.addUser(user);
            return ResponseEntity.ok(createdUser);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<?> loginUser(@PathVariable String email, @PathVariable String password) {
        try {
            boolean isAuthenticated = userService.authenticate(email, password);
            if (isAuthenticated) {
                return ResponseEntity.ok("{\"message\":\"Login successful\"}");
            } else {
                return new ResponseEntity<>("{\"message\":\"Invalid credentials\"}", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        try {
            boolean isDeleted = userService.deleteUser(id);
            if (isDeleted) {
                return new ResponseEntity<>("{\"message\":\"User deleted successfully\"}", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("{\"message\":\"User not found\"}", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        try {
            List<Signup> users = userService.getAllUsers();
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
     @GetMapping("/get/{email}")
    public ResponseEntity<?> getUserDetail(@PathVariable String email) {
        try {
            Signup userDetail = userService.findByEmail(email);
            if (userDetail == null) {
                return new ResponseEntity<>("User details not found.", HttpStatus.NOT_FOUND);
            }
            return ResponseEntity.ok(userDetail);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
