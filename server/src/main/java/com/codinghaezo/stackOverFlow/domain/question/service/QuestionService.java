package com.codinghaezo.stackOverFlow.domain.question.service;

import com.codinghaezo.stackOverFlow.Utils.UriCreator;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
import com.codinghaezo.stackOverFlow.member.Member;
import com.codinghaezo.stackOverFlow.member.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.URI;

@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;


    private final MemberRepository memberRepository;

    public QuestionService(QuestionRepository questionRepository, MemberRepository memberRepository) {

        this.questionRepository = questionRepository;
        this.memberRepository = memberRepository;
    }

    public URI createQuestion(String email, Question question) {
        Member author = findMemberByEmail(email);
        question.setAuthor(author);
        long questionId = questionRepository.save(question).getId();
        return UriCreator.createUri("/questions", questionId);
    }

    public Question findQuestion(long questionId) {
        Question foundQuestion = questionRepository.findById(questionId)
            .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        foundQuestion.setViews(questionRepository.updateView(questionId));
        return foundQuestion;
    }

    public Page<Question> findQuestions(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("id").descending());
        return questionRepository.findAll(pageRequest);
    }

    public Question updateQuestion(long questionId, Question question, String principalEmail) {
        Question foundQuestion = findQuestion(questionId);
        verifyAuthor(principalEmail, foundQuestion);
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

    public void deleteQuestion(long questionId, String principalEmail) {
        Question foundQuestion = findQuestion(questionId);
        verifyAuthor(principalEmail, foundQuestion);
        questionRepository.delete(foundQuestion);
    }


    private Member findMemberByEmail(String email) {
        return memberRepository.findByEmail(email)
            .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    private void verifyAuthor(String principalEmail, Question question) {
        String authorEmail = question.getAuthor().getEmail();
        if (!principalEmail.equals(authorEmail)) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_QUESTION);
        }
    }

}
