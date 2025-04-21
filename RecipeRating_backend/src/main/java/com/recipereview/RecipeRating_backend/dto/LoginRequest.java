package com.recipereview.RecipeRating_backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoginRequest {
    private String username;
    private String password;
}