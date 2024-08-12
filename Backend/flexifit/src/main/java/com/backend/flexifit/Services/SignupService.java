package com.backend.flexifit.Services;

import com.backend.flexifit.Model.Signup;
import com.backend.flexifit.Repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SignupService {

    @Autowired
    private SignupRepository userRepository;

    public Signup addUser(Signup user) {
        return userRepository.save(user);
    }

    public Signup findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean authenticate(String email, String password) {
        Signup user = userRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

    public boolean deleteUser(Long id) {
        Optional<Signup> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Signup> getAllUsers() {
        return userRepository.findAll();
    }
}
