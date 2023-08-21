package com.codinghaezo.stackOverFlow.answer.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    //List<Comment> findByAnswerId(Long answerId);
    @Query("SELECT c FROM Comment c JOIN FETCH c.member WHERE c.answer.answerId = :answerId")
    List<Comment> findByAnswerIdWithDetails(@Param("answerId") Long answerId);
}
