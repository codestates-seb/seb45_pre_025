package com.codinghaezo.stackOverFlow.domain.question.repository;

import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
