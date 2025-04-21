package com.recipereview.RecipeRating_backend.service;

import com.recipereview.RecipeRating_backend.dto.AdaptationRequest;
import com.recipereview.RecipeRating_backend.entity.Adaptation;
import com.recipereview.RecipeRating_backend.entity.Recipe;
import com.recipereview.RecipeRating_backend.entity.User;
import com.recipereview.RecipeRating_backend.repository.AdaptationRepository;
import com.recipereview.RecipeRating_backend.repository.RecipeRepository;
import com.recipereview.RecipeRating_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AdaptationService {

    @Autowired
    private AdaptationRepository adaptationRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserRepository userRepository;

    public Optional<Adaptation> suggestAdaptation(Long userId, AdaptationRequest adaptationRequest) {
        Optional<Recipe> recipeOptional = recipeRepository.findById(adaptationRequest.getRecipeId());
        Optional<User> userOptional = userRepository.findById(userId);

        if (recipeOptional.isPresent() && userOptional.isPresent()) {
            Adaptation adaptation = new Adaptation();
            adaptation.setRecipe(recipeOptional.get());
            adaptation.setSuggester(userOptional.get());
            adaptation.setAdaptationText(adaptationRequest.getAdaptationText());
            adaptation.setCreatedAt(LocalDateTime.now());
            adaptation.setUpvotes(0);
            adaptation.setDownvotes(0);
            return Optional.of(adaptationRepository.save(adaptation));
        }
        return Optional.empty();
    }

    public List<Adaptation> getAdaptationsForRecipe(Long recipeId) {
        return adaptationRepository.findByRecipeId(recipeId);
    }

    public Optional<Adaptation> upvoteAdaptation(Long adaptationId, Long userId) {
        Optional<Adaptation> adaptationOptional = adaptationRepository.findById(adaptationId);
        Optional<User> userOptional = userRepository.findById(userId);

        if (adaptationOptional.isPresent() && userOptional.isPresent()) {
            Adaptation adaptation = adaptationOptional.get();
            // In a real application, you might want to prevent a user from voting multiple times
            adaptation.setUpvotes(adaptation.getUpvotes() + 1);
            return Optional.of(adaptationRepository.save(adaptation));
        }
        return Optional.empty();
    }

    public Optional<Adaptation> downvoteAdaptation(Long adaptationId, Long userId) {
        Optional<Adaptation> adaptationOptional = adaptationRepository.findById(adaptationId);
        Optional<User> userOptional = userRepository.findById(userId);

        if (adaptationOptional.isPresent() && userOptional.isPresent()) {
            Adaptation adaptation = adaptationOptional.get();
            // In a real application, you might want to prevent a user from voting multiple times
            adaptation.setDownvotes(adaptation.getDownvotes() + 1);
            return Optional.of(adaptationRepository.save(adaptation));
        }
        return Optional.empty();
    }

    public Optional<Adaptation> getAdaptationById(Long adaptationId, Long recipeId) {
        return adaptationRepository.findByIdAndRecipeId(adaptationId, recipeId);
    }
}