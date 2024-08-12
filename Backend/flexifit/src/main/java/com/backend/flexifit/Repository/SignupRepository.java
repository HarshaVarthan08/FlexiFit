package com.backend.flexifit.Repository;
import com.backend.flexifit.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SignupRepository extends JpaRepository<Signup, Long> {
    Signup findByEmail(String email);
}
                              