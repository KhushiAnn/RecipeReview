package com.recipereview.RecipeRating_backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RatingRequest {
    private Integer recipeId; // To identify which recipe is being rated
    private Integer ratingValue; // The rating value (e.g., 1 to 5)
}