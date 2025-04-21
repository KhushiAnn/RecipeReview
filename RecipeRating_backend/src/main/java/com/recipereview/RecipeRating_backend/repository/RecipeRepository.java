package com.recipereview.RecipeRating_backend.repository;

import com.recipereview.RecipeRating_backend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findByTitleContainingIgnoreCase(String keyword);
    List<Recipe> findByCategoryIgnoreCase(String category);

    // Example of a more complex query using @Query
    @Query("SELECT r FROM Recipe r WHERE LOWER(r.ingredients) LIKE %:ingredient%")
    List<Recipe> findByIngredientsContainingIgnoreCase(@Param("ingredient") String ingredient);

    List<Recipe> findByCategoryIgnoreCaseAndTitleContainingIgnoreCase(String category, String keyword);

    // You can add more custom query methods as needed, for example:
    // List<Recipe> findByUser_Id(Long userId);
    // List<Recipe> findByOrderByCreatedAtDesc(); // Find all recipes ordered by creation date (newest first)
    // List<Recipe> findByOrderByRatingsDesc(); // Would require a join or subquery to order by average rating
}