package com.backend.flexifit.Repository;

import com.backend.flexifit.Model.Userdetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserdetailRepository extends JpaRepository<Userdetail, Long> {
    Userdetail findByEmail(String email);
}
