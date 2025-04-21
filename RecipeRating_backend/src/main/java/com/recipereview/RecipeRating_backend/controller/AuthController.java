package com.recipereview.RecipeRating_backend.controller;

import com.recipereview.RecipeRating_backend.dto.LoginRequest;
import com.recipereview.RecipeRating_backend.dto.RegistrationRequest;
import com.recipereview.RecipeRating_backend.entity.User;
import com.recipereview.RecipeRating_backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistrationRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Map token = authService.login(request);
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    }
    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(@RequestBody Map<String, String> body) {
        String newAccessToken = authService.refreshToken(body.get("refreshToken"));
        return ResponseEntity.ok(Collections.singletonMap("accessToken", newAccessToken));
    }


}