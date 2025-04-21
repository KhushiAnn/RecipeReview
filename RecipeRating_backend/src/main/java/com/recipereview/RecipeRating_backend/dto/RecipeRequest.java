package com.recipereview.RecipeRating_backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RecipeRequest {
    private String title;
    private String ingredients;
    private String instructions;
    private Integer cookingTime;
    private Integer servings;
    private String category;
    private String imageUrl; // Optional
}