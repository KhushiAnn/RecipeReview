package com.recipereview.RecipeRating_backend.controller;

import com.recipereview.RecipeRating_backend.dto.RatingRequest;
import com.recipereview.RecipeRating_backend.entity.Rating;
import com.recipereview.RecipeRating_backend.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recipes/{recipeId}/rate")
@CrossOrigin(origins = "http://localhost:3000")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping
    public ResponseEntity<Rating> rateRecipe(@PathVariable Long recipeId, @RequestBody RatingRequest ratingRequest) {
        // In a real application, get the user ID from the authentication context
        Long userId = 1L; // Placeholder for current user ID
        ratingRequest.setRecipeId(recipeId.intValue()); // Ensure recipeId in request matches path
        Optional<Rating> rated = ratingService.rateRecipe(userId, ratingRequest);
        return rated.map(r -> new ResponseEntity<>(r, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.BAD_REQUEST)); // Or other appropriate error
    }

    @GetMapping
    public ResponseEntity<List<Rating>> getRatingsForRecipe(@PathVariable Long recipeId) {
        List<Rating> ratings = ratingService.getRatingsForRecipe(recipeId);
        return new ResponseEntity<>(ratings, HttpStatus.OK);
    }

    @GetMapping("/average")
    public ResponseEntity<Double> getAverageRating(@PathVariable Long recipeId) {
        Double averageRating = ratingService.calculateAverageRating(recipeId);
        return new ResponseEntity<>(averageRating, HttpStatus.OK);
    }
}