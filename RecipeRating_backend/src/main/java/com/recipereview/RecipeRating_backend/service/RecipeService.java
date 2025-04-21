package com.recipereview.RecipeRating_backend.service;

import com.recipereview.RecipeRating_backend.dto.RecipeRequest;
import com.recipereview.RecipeRating_backend.dto.RecipeUpdateRequest;
import com.recipereview.RecipeRating_backend.entity.Recipe;
import com.recipereview.RecipeRating_backend.entity.User;
import com.recipereview.RecipeRating_backend.repository.RecipeRepository;
import com.recipereview.RecipeRating_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Recipe> getAllRecipes(String category, String keyword) {
        if (category != null && !category.isEmpty() && keyword != null && !keyword.isEmpty()) {
            return recipeRepository.findByCategoryIgnoreCaseAndTitleContainingIgnoreCase(category, keyword);
        } else if (category != null && !category.isEmpty()) {
            return recipeRepository.findByCategoryIgnoreCase(category);
        } else if (keyword != null && !keyword.isEmpty()) {
            return recipeRepository.findByTitleContainingIgnoreCase(keyword);
        } else {
            return recipeRepository.findAll();
        }
    }

    public Optional<Recipe> getRecipeById(Long recipeId) {
        return recipeRepository.findById(recipeId);
    }

    public Recipe createRecipe(Long userId, RecipeRequest recipeRequest) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        Recipe recipe = new Recipe();
        recipe.setUser(user);
        recipe.setTitle(recipeRequest.getTitle());
        recipe.setIngredients(recipeRequest.getIngredients());
        recipe.setInstructions(recipeRequest.getInstructions());
        recipe.setCategory(recipeRequest.getCategory());
        recipe.setImageUrl(recipeRequest.getImageUrl());
        recipe.setCreatedAt(LocalDateTime.now());
        return recipeRepository.save(recipe);
    }

    public Optional<Recipe> updateRecipe(Long recipeId, RecipeUpdateRequest recipeUpdateRequest) {
        Optional<Recipe> existingRecipeOptional = recipeRepository.findById(recipeId);
        if (existingRecipeOptional.isPresent()) {
            Recipe existingRecipe = existingRecipeOptional.get();
            if (recipeUpdateRequest.getTitle() != null) {
                existingRecipe.setTitle(recipeUpdateRequest.getTitle());
            }

            if (recipeUpdateRequest.getIngredients() != null) {
                existingRecipe.setIngredients(recipeUpdateRequest.getIngredients());
            }
            if (recipeUpdateRequest.getInstructions() != null) {
                existingRecipe.setInstructions(recipeUpdateRequest.getInstructions());
            }
            if (recipeUpdateRequest.getCategory() != null) {
                existingRecipe.setCategory(recipeUpdateRequest.getCategory());
            }
            if (recipeUpdateRequest.getImageUrl() != null) {
                existingRecipe.setImageUrl(recipeUpdateRequest.getImageUrl());
            }
            return Optional.of(recipeRepository.save(existingRecipe));
        }
        return Optional.empty();
    }

    public void deleteRecipe(Long recipeId) {
        recipeRepository.deleteById(recipeId);
    }
}