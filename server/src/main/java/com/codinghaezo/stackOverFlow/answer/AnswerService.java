package com.codinghaezo.stackOverFlow.answer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class AnswerService {
    private final AnswerRepository answerRepository;
       public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }
    @Transactional(readOnly = true)
    public Answer findAnswer(long answerId){
           return answerRepository.findById(answerId).orElseThrow();
    }

    public Page<Answer> findAll(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page - 1, size, Sort.by("answerId").descending()));
    }
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public void deleteAnswer(long answerId) {
           Answer foundAnswer = findAnswer(answerId);
           answerRepository.delete(foundAnswer);
    }

    public Answer updateAnswer(Answer answer, long answerId) {
        Answer foundAnswer = findAnswer(answerId);
        foundAnswer.setContent(answer.getContent());
        return answerRepository.save(foundAnswer);
    }




}
