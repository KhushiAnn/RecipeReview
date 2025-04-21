package com.recipereview.RecipeRating_backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RegistrationRequest {
    private String username;
    private String password;
    private String displayName; // Optional
    private String bio;         // Optional
}