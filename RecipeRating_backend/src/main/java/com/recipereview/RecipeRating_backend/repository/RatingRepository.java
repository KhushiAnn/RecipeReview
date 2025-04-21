package com.recipereview.RecipeRating_backend.repository;

import com.recipereview.RecipeRating_backend.entity.Rating;
import com.recipereview.RecipeRating_backend.entity.Recipe;
import com.recipereview.RecipeRating_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
    Optional<Rating> findByUserAndRecipe(User user, Recipe recipe);
    List<Rating> findByRecipe(Recipe recipe);
    // You might add a method to find ratings by a specific user if needed
    List<Rating> findByUser(User user);
}