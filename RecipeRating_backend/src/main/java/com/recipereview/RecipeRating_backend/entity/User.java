package com.recipereview.RecipeRating_backend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    private String displayName;

    private String bio;


    @Enumerated(EnumType.STRING)
    private Role role;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Recipe> recipes;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Rating> ratings;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Review> reviews;

    @OneToMany(mappedBy = "suggester")
    @JsonManagedReference
    private List<Adaptation> adaptations;
}