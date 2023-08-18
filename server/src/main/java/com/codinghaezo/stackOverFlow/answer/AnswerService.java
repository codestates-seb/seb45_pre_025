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

    public Answer updateAnswer(Answer answer, long answerId, long memberId) {
        Answer foundAnswer = findAnswer(answerId); /*
         1. 답변아이디로 답변글을 찾는다.
         2. 답변글로 작성자 멤버 아이디를 찾는다. findMemberId
             /*
           식별 if(memberId==findMemberId)
           else 에러 던지기(유효하지 않은 회원입니다.)
            */
        foundAnswer.setContent(answer.getContent()); // 찾은 답변글의 내용을 수정한다.
        return answerRepository.save(foundAnswer); //리포지토리에 저장한다.
    }

}
