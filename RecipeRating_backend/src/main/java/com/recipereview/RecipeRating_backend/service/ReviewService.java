package com.recipereview.RecipeRating_backend.service;

import com.recipereview.RecipeRating_backend.dto.ReviewRequest;
import com.recipereview.RecipeRating_backend.entity.Recipe;
import com.recipereview.RecipeRating_backend.entity.Review;
import com.recipereview.RecipeRating_backend.entity.User;
import com.recipereview.RecipeRating_backend.repository.RecipeRepository;
import com.recipereview.RecipeRating_backend.repository.ReviewRepository;
import com.recipereview.RecipeRating_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserRepository userRepository;

    public Optional<Review> addReview(Long userId, ReviewRequest request) {
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Recipe> recipeOptional = recipeRepository.findById((long) request.getRecipeId());

        if (userOptional.isEmpty() || recipeOptional.isEmpty()) {
            return Optional.empty(); // User or recipe not found
        }

        User user = userOptional.get();
        Recipe recipe = recipeOptional.get();

        Review review = new Review();
        review.setUser(user);
        review.setRecipe(recipe);
        review.setComment(request.getComment());
        review.setCreatedAt(LocalDateTime.now());

        return Optional.of(reviewRepository.save(review));
    }

    public List<Review> getReviewsForRecipe(Long recipeId) {
        Optional<Recipe> recipeOptional = recipeRepository.findById(recipeId);
        return recipeOptional.map(reviewRepository::findByRecipe).orElse(List.of());
    }
}