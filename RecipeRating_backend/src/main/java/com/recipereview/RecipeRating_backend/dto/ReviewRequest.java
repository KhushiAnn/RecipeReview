package com.recipereview.RecipeRating_backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReviewRequest {
    private Integer recipeId; // To identify the recipe being reviewed
    private String comment;
}