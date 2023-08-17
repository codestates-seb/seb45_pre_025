package com.codinghaezo.stackOverFlow.domain.question.service;

import com.codinghaezo.stackOverFlow.Utils.UriCreator;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.URI;
import java.util.Optional;

@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public URI createQuestion(Question question) {
        long questionId = questionRepository.save(question).getId();
        return UriCreator.createUri("/questions", questionId);
    }

    public Question findQuestion(long questionId) {
        Optional<Question> foundQuestion = questionRepository.findById(questionId);
        return foundQuestion.orElseThrow(RuntimeException::new);
    }

    public Page<Question> findQuestions(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("id").descending());
        return questionRepository.findAll(pageRequest);
    }

    public Question updateQuestion(long questionId, Question question) {
        Question foundQuestion = findQuestion(questionId);
        Question updatedQuestion = Question.builder()
            .id(questionId)
            .title((question.getTitle() == null)
                ? foundQuestion.getTitle()
                : question.getTitle())
            .bodyProblem((question.getBodyProblem() == null)
                ? foundQuestion.getBodyProblem()
                : question.getBodyProblem())
            .bodyExpecting((question.getBodyExpecting() == null)
                ? foundQuestion.getBodyExpecting()
                : question.getBodyExpecting())
            .build();
        return questionRepository.save(updatedQuestion);
    }

    public void deleteQuestion(long questionId) {
        Question foundQuestion = findQuestion(questionId);
        questionRepository.delete(foundQuestion);
    }
}
