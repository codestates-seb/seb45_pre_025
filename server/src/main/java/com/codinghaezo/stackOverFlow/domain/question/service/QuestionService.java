package com.codinghaezo.stackOverFlow.domain.question.service;

import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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

    public Page<Question> findQuestions(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("id").descending());
        return questionRepository.findAll(pageRequest);
    }

    public Question updateQuestion(Question question) {
        Question foundQuestion = findQuestion(question.getId());
        String title = question.getTitle();
        if (title != null) {
            foundQuestion.setTitle(title);
        }
        String bodyProblem = question.getBodyProblem();
        if (bodyProblem != null) {
            foundQuestion.setBodyProblem(bodyProblem);
        }
        String bodyExpecting = question.getBodyExpecting();
        if (bodyExpecting != null) {
            foundQuestion.setBodyExpecting(bodyExpecting);
        }
        return questionRepository.save(foundQuestion);
    }

    public void deleteQuestion(long questionId) {
        Question foundQuestion = findQuestion(questionId);
        questionRepository.delete(foundQuestion);
    }
}
