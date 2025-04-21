package com.recipereview.RecipeRating_backend.controller;

import com.recipereview.RecipeRating_backend.dto.RecipeRequest;
import com.recipereview.RecipeRating_backend.dto.RecipeUpdateRequest;
import com.recipereview.RecipeRating_backend.entity.Recipe;
import com.recipereview.RecipeRating_backend.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping
    public ResponseEntity<List<Recipe>> getAllRecipes(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String keyword) {
        List<Recipe> recipes = recipeService.getAllRecipes(category, keyword);
        return new ResponseEntity<>(recipes, HttpStatus.OK);
    }

    @GetMapping("/{recipeId}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable Long recipeId) {
        Optional<Recipe> recipe = recipeService.getRecipeById(recipeId);
        return recipe.map(r -> new ResponseEntity<>(r, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Recipe> createRecipe(@RequestBody RecipeRequest recipeRequest) {
        // In a real application, you would get the user ID from the authentication context
        Long userId = 1L; // Placeholder for current user ID
        Recipe createdRecipe = recipeService.createRecipe(userId, recipeRequest);
        return new ResponseEntity<>(createdRecipe, HttpStatus.CREATED);
    }

    @PutMapping("/{recipeId}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long recipeId, @RequestBody RecipeUpdateRequest recipeUpdateRequest) {
        Optional<Recipe> updatedRecipe = recipeService.updateRecipe(recipeId, recipeUpdateRequest);
        return updatedRecipe.map(r -> new ResponseEntity<>(r, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{recipeId}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long recipeId) {
        recipeService.deleteRecipe(recipeId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}