package com.recipereview.RecipeRating_backend.controller;

import com.recipereview.RecipeRating_backend.dto.ReviewRequest;
import com.recipereview.RecipeRating_backend.entity.Review;
import com.recipereview.RecipeRating_backend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recipes/{recipeId}/reviews")
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> addReview(@PathVariable Long recipeId, @RequestBody ReviewRequest reviewRequest) {
        // In a real application, get the user ID from the authentication context
        Long userId = 1L; // Placeholder for current user ID
        reviewRequest.setRecipeId(recipeId.intValue()); // Ensure recipeId in request matches path
        Optional<Review> addedReview = reviewService.addReview(userId, reviewRequest);
        return addedReview.map(r -> new ResponseEntity<>(r, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.BAD_REQUEST)); // Or other appropriate error
    }

    @GetMapping
    public ResponseEntity<List<Review>> getReviewsForRecipe(@PathVariable Long recipeId) {
        List<Review> reviews = reviewService.getReviewsForRecipe(recipeId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
}