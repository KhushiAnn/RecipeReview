package com.recipereview.RecipeRating_backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "ratings", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "recipe_id"})})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "recipe_id", nullable = false)
    @JsonBackReference
    private Recipe recipe;

    @Column(name = "rating_value", nullable = false)
    private Integer ratingValue; // Assuming a scale (e.g., 1 to 5)

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;
}