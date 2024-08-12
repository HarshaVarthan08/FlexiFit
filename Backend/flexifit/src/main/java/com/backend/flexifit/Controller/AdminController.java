package com.backend.flexifit.Controller;
import com.backend.flexifit.Model.*;
import com.backend.flexifit.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") // Adjust this if your frontend runs on a different port
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/adminlogin/{email}/{password}")
    public ResponseEntity<?> loginUser(@PathVariable String email, @PathVariable String password) {
        try {
            boolean isAuthenticated = adminService.authenticate(email, password);
            if (isAuthenticated) {
                return ResponseEntity.ok("{\"message\":\"Login successful\"}");
            } else {
                return new ResponseEntity<>("{\"message\":\"Invalid credentials\"}", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
