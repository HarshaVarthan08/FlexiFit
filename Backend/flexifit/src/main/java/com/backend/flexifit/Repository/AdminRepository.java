package com.backend.flexifit.Repository;
import com.backend.flexifit.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;
public interface AdminRepository extends JpaRepository<Admin, Long>{
    Admin findByEmail(String email);
}
