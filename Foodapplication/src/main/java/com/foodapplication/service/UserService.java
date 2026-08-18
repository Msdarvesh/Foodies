package com.foodapplication.service;

import com.foodapplication.io.UserRequest;
import com.foodapplication.io.UserResponse;

public interface UserService {

    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
