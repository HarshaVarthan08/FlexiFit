package com.backend.flexifit.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.flexifit.Model.Workoutdetail;

import java.util.List;

@Repository
public interface WorkoutdetailRepository extends JpaRepository<Workoutdetail, Long> {

    @Query(value = "SELECT * FROM Workoutdetail WHERE email = :email", nativeQuery = true)
    List<Workoutdetail> findByEmail(@Param("email") String email);
}
