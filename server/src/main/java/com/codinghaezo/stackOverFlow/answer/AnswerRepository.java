package com.codinghaezo.stackOverFlow.answer;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findByQuestionId(Long questionId);

  //  List<Answer> findByMember_IdAndQuestion_Id(Long memberId, Long questionId);
}