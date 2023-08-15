package com.codinghaezo.stackOverFlow.domain.question.entity;

import com.codinghaezo.stackOverFlow.audit.Auditable;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    /* 질문 작성자를 참조하는 필드 필요 */
}
