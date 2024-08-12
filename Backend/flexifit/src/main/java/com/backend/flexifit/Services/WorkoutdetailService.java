package com.backend.flexifit.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.flexifit.Model.Workoutdetail;
import com.backend.flexifit.Repository.WorkoutdetailRepository;

import java.util.List;

@Service
public class WorkoutdetailService {

    @Autowired
    private WorkoutdetailRepository workoutdetailRepository;

    // Fetch all workout details
    public List<Workoutdetail> getAllWorkoutdetails() {
        return workoutdetailRepository.findAll();
    }

    // Fetch workout details by email
    public List<Workoutdetail> getWorkoutdetailsByEmail(String email) {
        return workoutdetailRepository.findByEmail(email);
    }

    // Save a workout detail
    public Workoutdetail saveWorkoutdetail(Workoutdetail workoutdetail) {
        return workoutdetailRepository.save(workoutdetail);
    }

    // Delete a workout detail by ID
    public void deleteWorkoutdetail(Long id) {
        workoutdetailRepository.deleteById(id);
    }
}
