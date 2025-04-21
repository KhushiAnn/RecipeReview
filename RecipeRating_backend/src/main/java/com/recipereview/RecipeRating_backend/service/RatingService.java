package com.recipereview.RecipeRating_backend.service;

import com.recipereview.RecipeRating_backend.dto.RatingRequest;
import com.recipereview.RecipeRating_backend.entity.Rating;
import com.recipereview.RecipeRating_backend.entity.Recipe;
import com.recipereview.RecipeRating_backend.entity.User;
import com.recipereview.RecipeRating_backend.repository.RatingRepository;
import com.recipereview.RecipeRating_backend.repository.RecipeRepository;
import com.recipereview.RecipeRating_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserRepository userRepository;

    public Optional<Rating> rateRecipe(Long userId, RatingRequest request) {
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Recipe> recipeOptional = recipeRepository.findById((long) request.getRecipeId());

        if (userOptional.isEmpty() || recipeOptional.isEmpty()) {
            return Optional.empty(); // User or recipe not found
        }

        User user = userOptional.get();
        Recipe recipe = recipeOptional.get();
        Integer ratingValue = request.getRatingValue();

        if (ratingValue < 1 || ratingValue > 5) {
            return Optional.empty(); // Invalid rating value
        }

        Optional<Rating> existingRating = ratingRepository.findByUserAndRecipe(user, recipe);
        Rating rating;
        if (existingRating.isPresent()) {
            rating = existingRating.get();
            rating.setRatingValue(ratingValue);
        } else {
            rating = new Rating();
            rating.setUser(user);
            rating.setRecipe(recipe);
            rating.setRatingValue(ratingValue);
            rating.setCreatedAt(LocalDateTime.now());
        }

        return Optional.of(ratingRepository.save(rating));
    }

    public List<Rating> getRatingsForRecipe(Long recipeId) {
        Optional<Recipe> recipeOptional = recipeRepository.findById(recipeId);
        return recipeOptional.map(ratingRepository::findByRecipe).orElse(List.of());
    }

    // Method to calculate average rating for a recipe (can be in RecipeService or here)
    public Double calculateAverageRating(Long recipeId) {
        List<Rating> ratings = getRatingsForRecipe(recipeId);
        if (ratings.isEmpty()) {
            return 0.0;
        }
        double sum = 0;
        for (Rating rating : ratings) {
            sum += rating.getRatingValue();
        }
        return sum / ratings.size();
    }
}