package com.codinghaezo.stackOverFlow.domain.question.entity;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String bodyProblem;

    @Column(nullable = false)
    private String bodyExpecting;
}
