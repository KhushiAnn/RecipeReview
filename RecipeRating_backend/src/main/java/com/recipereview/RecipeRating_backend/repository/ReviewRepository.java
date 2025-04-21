package com.recipereview.RecipeRating_backend.repository;

import com.recipereview.RecipeRating_backend.entity.Recipe;
import com.recipereview.RecipeRating_backend.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByRecipe(Recipe recipe);
    // You might add a method to find reviews by a specific user if needed
    // List<Review> findByUser(User user);
}