package com.backend.flexifit.Services;

import com.backend.flexifit.Model.Userdetail;
import com.backend.flexifit.Repository.UserdetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserdetailService {

    @Autowired
    private UserdetailRepository userdetailRepository;

    public Userdetail addUserDetail(Userdetail userDetail) {
        return userdetailRepository.save(userDetail);
    }

    public Userdetail getUserDetailByEmail(String email) {
        return userdetailRepository.findByEmail(email);
    }
}
