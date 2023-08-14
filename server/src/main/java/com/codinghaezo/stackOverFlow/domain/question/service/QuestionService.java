package com.codinghaezo.stackOverFlow.domain.question.service;

import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        Optional<Question> foundQuestion = questionRepository.findById(questionId);
        return foundQuestion.orElseThrow(RuntimeException::new);
    }
}
