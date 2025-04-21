package com.recipereview.RecipeRating_backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "adaptations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Adaptation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "suggester_id", nullable = false)
    @JsonBackReference
    private User suggester;

    @ManyToOne
    @JoinColumn(name = "recipe_id", nullable = false)
    @JsonBackReference
    private Recipe recipe;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String adaptationText;

    private Integer upvotes = 0;

    private Integer downvotes = 0;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;
}