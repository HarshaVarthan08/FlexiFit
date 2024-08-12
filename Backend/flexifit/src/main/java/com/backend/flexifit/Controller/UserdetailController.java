package com.backend.flexifit.Controller;

import com.backend.flexifit.Model.Userdetail;
import com.backend.flexifit.Services.UserdetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/userdetails")
@CrossOrigin(origins = "http://localhost:3000") // Adjust this if your frontend runs on a different port
public class UserdetailController {

    @Autowired
    private UserdetailService userdetailService;

    @PostMapping("/add")
    public ResponseEntity<?> addUserDetail(@RequestBody Userdetail userDetail) {
        try {
            // Save user details
            Userdetail createdUserDetail = userdetailService.addUserDetail(userDetail);
            return ResponseEntity.ok(createdUserDetail);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<?> getUserDetail(@PathVariable String email) {
        try {
            Userdetail userDetail = userdetailService.getUserDetailByEmail(email);
            if (userDetail == null) {
                return new ResponseEntity<>("User details not found.", HttpStatus.NOT_FOUND);
            }
            return ResponseEntity.ok(userDetail);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
