package com.recipereview.RecipeRating_backend.service;

import com.recipereview.RecipeRating_backend.dto.LoginRequest;
import com.recipereview.RecipeRating_backend.dto.RegistrationRequest;
import com.recipereview.RecipeRating_backend.entity.User;
import com.recipereview.RecipeRating_backend.repository.UserRepository;
import com.recipereview.RecipeRating_backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    public String register(RegistrationRequest request) {
        var user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);
        return "User registered successfully!";
    }

    public Map<String, String> login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        String accessToken = jwtUtil.generateToken(request.getUsername());
        String refreshToken = jwtUtil.generateRefreshToken(request.getUsername());

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);

        return tokens;
    }

    public String refreshToken(String refreshToken) {
        if (!jwtUtil.validateToken(refreshToken)) throw new RuntimeException("Invalid refresh token");
        String username = jwtUtil.extractUsername(refreshToken);
        return jwtUtil.generateToken(username);
    }

}
