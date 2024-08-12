package com.backend.flexifit.Services;
import com.backend.flexifit.Model.*;
import com.backend.flexifit.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class AdminService {
    @Autowired
    private AdminRepository adminrepository;
    public boolean authenticate(String email, String password) {
        Admin user = adminrepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

    public Admin findByEmail(String email) {
        return adminrepository.findByEmail(email);
    }
}
