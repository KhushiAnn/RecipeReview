package com.recipereview.RecipeRating_backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class AdaptationRequest {
    private Long recipeId; // To identify the recipe being adapted
    private String adaptationText;
}