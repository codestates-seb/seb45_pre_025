package com.codinghaezo.stackOverFlow.domain.question.repository;

import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Modifying
    @Query("update Question q set q.views = q.views + 1 where q.id = :questionId")
    void increaseViews(Long questionId);

    @Query("select q from Question q where q.author.memberId = :authorId")
    Page<Question> findAllOfUser(long authorId, Pageable pageable);
}
