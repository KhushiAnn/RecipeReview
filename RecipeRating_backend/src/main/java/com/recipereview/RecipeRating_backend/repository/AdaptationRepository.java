package com.recipereview.RecipeRating_backend.repository;

import com.recipereview.RecipeRating_backend.entity.Adaptation;
import com.recipereview.RecipeRating_backend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdaptationRepository extends JpaRepository<Adaptation, Long> {
    List<Adaptation> findByRecipe(Recipe recipe);
    List<Adaptation> findByRecipeId(Long recipeId);
    // You might add methods to find adaptations by user or order them by votes
    List<Adaptation> findBySuggester_Id(Long suggesterId);
    Optional<Adaptation> findByIdAndRecipeId(Long id, Long recipeId);
    List<Adaptation> findByRecipe_IdOrderByUpvotesDesc(Long recipeId);
}