package com.codinghaezo.stackOverFlow.domain.question.repository;

import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Modifying
    @Query("update Question q set q.views = q.views + 1 where q.id = :questionId")
    void updateView(Long questionId);
}
