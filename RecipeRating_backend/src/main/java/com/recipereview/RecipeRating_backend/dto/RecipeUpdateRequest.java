package com.recipereview.RecipeRating_backend.dto;

import lombok.Data;

@Data
public class RecipeUpdateRequest {
    private String title;
    private String ingredients;
    private String instructions;
    private String category;
    private String imageUrl; // Optional: Add image update capability
}