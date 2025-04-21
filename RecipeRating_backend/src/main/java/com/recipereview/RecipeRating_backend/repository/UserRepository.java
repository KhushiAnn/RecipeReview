package com.recipereview.RecipeRating_backend.repository;

import com.recipereview.RecipeRating_backend.entity.Adaptation;
import com.recipereview.RecipeRating_backend.entity.Rating;
import com.recipereview.RecipeRating_backend.entity.Recipe;
import com.recipereview.RecipeRating_backend.entity.Review;
import com.recipereview.RecipeRating_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
}