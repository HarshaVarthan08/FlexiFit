package com.backend.flexifit.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.backend.flexifit.Model.Workoutdetail;
import com.backend.flexifit.Services.WorkoutdetailService;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
@CrossOrigin(origins = "http://localhost:3000") // Adjust the origin as per your front-end URL
public class WorkoutdetailController {

    @Autowired
    private WorkoutdetailService workoutdetailService;

    // Get all workout details
    @GetMapping
    public List<Workoutdetail> getAllWorkoutdetails() {
        return workoutdetailService.getAllWorkoutdetails();
    }

    // Get workout details by email
    @GetMapping("/{email}")
    public List<Workoutdetail> getWorkoutdetailsByEmail(@PathVariable String email) {
        return workoutdetailService.getWorkoutdetailsByEmail(email);
    }

    // Create a new workout detail
    @PostMapping
    public Workoutdetail createWorkoutdetail(@RequestBody Workoutdetail workoutdetail) {
        return workoutdetailService.saveWorkoutdetail(workoutdetail);
    }

    // Delete a workout detail by ID
    @DeleteMapping("/{id}")
    public void deleteWorkoutdetail(@PathVariable Long id) {
        workoutdetailService.deleteWorkoutdetail(id);
    }
}
