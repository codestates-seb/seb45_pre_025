package com.codinghaezo.stackOverFlow.domain.question.entity;

import com.codinghaezo.stackOverFlow.answer.Answer;
import com.codinghaezo.stackOverFlow.audit.Auditable;
import com.codinghaezo.stackOverFlow.member.Member;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String bodyProblem;

    @Column(nullable = false)
    private String bodyExpecting;

    private int views;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Member author;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();
}