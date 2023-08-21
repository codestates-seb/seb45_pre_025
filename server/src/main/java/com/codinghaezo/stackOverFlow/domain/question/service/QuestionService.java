package com.codinghaezo.stackOverFlow.domain.question.service;

import com.codinghaezo.stackOverFlow.Utils.UriCreator;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
import com.codinghaezo.stackOverFlow.logIn.utils.UserAuthService;
import com.codinghaezo.stackOverFlow.member.Member;
import com.codinghaezo.stackOverFlow.member.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;

@Service
@Transactional
public class QuestionService {

    private final UserAuthService userAuthService;

    private final QuestionRepository questionRepository;

    private final MemberRepository memberRepository;

    public QuestionService(

            UserAuthService userAuthService,
            QuestionRepository questionRepository,
            MemberRepository memberRepository

    ) {
        this.userAuthService = userAuthService;
        this.questionRepository = questionRepository;
        this.memberRepository = memberRepository;
    }

    public URI createQuestion(HttpServletRequest request, Question question) {
        String signedInUserEmail = userAuthService.getSignedInUserEmail(request);
        Member author = findMemberByEmail(signedInUserEmail);
        question.setAuthor(author);
        long questionId = questionRepository.save(question).getId();
        return UriCreator.createUri("/questions", questionId);
    }

    public Question findQuestion(long questionId) {
        return questionRepository.findById(questionId)

                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

    }

    public Page<Question> findQuestions(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("id").descending());
        return questionRepository.findAll(pageRequest);
    }


    public Page<Question> findQuestionsOfUser(HttpServletRequest request, int page, int size) {
        String signedInUserEmail = userAuthService.getSignedInUserEmail(request);
        long authorId = findMemberByEmail(signedInUserEmail).getMemberId();
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("id").descending());
        return questionRepository.findAllOfUser(authorId, pageRequest);
    }


    public Question updateQuestion(long questionId, Question question, HttpServletRequest request) {
        String signedInUserEmail = userAuthService.getSignedInUserEmail(request);
        Question foundQuestion = findQuestion(questionId);
        verifyAuthor(signedInUserEmail, foundQuestion);
        foundQuestion.setTitle((question.getTitle() == null)

                ? foundQuestion.getTitle()
                : question.getTitle());
        foundQuestion.setBodyProblem((question.getBodyProblem() == null)
                ? foundQuestion.getBodyProblem()
                : question.getBodyProblem());
        foundQuestion.setBodyExpecting((question.getBodyExpecting() == null)
                ? foundQuestion.getBodyExpecting()
                : question.getBodyExpecting());

        return questionRepository.save(foundQuestion);
    }

    public void deleteQuestion(long questionId, HttpServletRequest request) {
        String signedInUserEmail = userAuthService.getSignedInUserEmail(request);
        Question foundQuestion = findQuestion(questionId);
        verifyAuthor(signedInUserEmail, foundQuestion);
        questionRepository.delete(foundQuestion);
    }

    public void increaseViews(long questionId) {
        questionRepository.increaseViews(questionId);
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
