package com.recipereview.RecipeRating_backend.controller;

import com.recipereview.RecipeRating_backend.dto.AdaptationRequest;
import com.recipereview.RecipeRating_backend.entity.Adaptation;
import com.recipereview.RecipeRating_backend.service.AdaptationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/recipes/{recipeId}/adaptations")
public class AdaptationController {

    @Autowired
    private AdaptationService adaptationService;

    @PostMapping
    public ResponseEntity<Adaptation> suggestAdaptation(@PathVariable Long recipeId, @RequestBody AdaptationRequest adaptationRequest) {
        // In a real application, get the user ID from the authentication context
        Long userId = 1L; // Placeholder for current user ID
        adaptationRequest.setRecipeId(recipeId); // Ensure recipeId in request matches path
        Optional<Adaptation> suggestedAdaptation = adaptationService.suggestAdaptation(userId, adaptationRequest);
        return suggestedAdaptation.map(a -> new ResponseEntity<>(a, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(HttpStatus.BAD_REQUEST)); // Or other error
    }

    @GetMapping
    public ResponseEntity<List<Adaptation>> getAdaptationsForRecipe(@PathVariable Long recipeId) {
        List<Adaptation> adaptations = adaptationService.getAdaptationsForRecipe(recipeId);
        return new ResponseEntity<>(adaptations, HttpStatus.OK);
    }

    @PostMapping("/{adaptationId}/upvote")
    public ResponseEntity<Adaptation> upvoteAdaptation(@PathVariable Long recipeId, @PathVariable Long adaptationId) {
        // In a real application, get the user ID from the authentication context
        Long userId = 1L; // Placeholder for current user ID
        Optional<Adaptation> updatedAdaptation = adaptationService.upvoteAdaptation(adaptationId, userId);
        return updatedAdaptation.map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/{adaptationId}/downvote")
    public ResponseEntity<Adaptation> downvoteAdaptation(@PathVariable Long recipeId, @PathVariable Long adaptationId) {
        // In a real application, get the user ID from the authentication context
        Long userId = 1L; // Placeholder for current user ID
        Optional<Adaptation> updatedAdaptation = adaptationService.downvoteAdaptation(adaptationId, userId);
        return updatedAdaptation.map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Consider adding a GET endpoint to retrieve a specific adaptation by its ID
    @GetMapping("/{adaptationId}")
    public ResponseEntity<Adaptation> getAdaptationById(@PathVariable Long recipeId, @PathVariable Long adaptationId) {
        Optional<Adaptation> adaptation = adaptationService.getAdaptationById(adaptationId, recipeId);
        return adaptation.map(a -> new ResponseEntity<>(a, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}