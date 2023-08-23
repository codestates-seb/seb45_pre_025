package com.codinghaezo.stackOverFlow.answer;

import com.codinghaezo.stackOverFlow.answer.comment.Comment;
import com.codinghaezo.stackOverFlow.answer.comment.CommentRepository;
import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
import com.codinghaezo.stackOverFlow.member.Member;
import com.codinghaezo.stackOverFlow.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class    AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberRepository memberRepository;

    private final CommentRepository commentRepository;

    public AnswerService(AnswerRepository answerRepository,
                         MemberRepository memberRepository,
                         CommentRepository commentRepository) {
        this.answerRepository = answerRepository;
        this.memberRepository = memberRepository;
        this.commentRepository = commentRepository;
    }


    public Answer findAnswer(long answerId) {
        return answerRepository.findById(answerId).orElseThrow();
    }

    public List<AnswerDto.AnswerResponseDTOV1> getAnswersByQuestionId(long questionId) {
        List<Answer> answers = answerRepository.findByQuestionId(questionId);
        List<AnswerDto.AnswerResponseDTOV1> responseDTOList = new ArrayList<>();

        for (Answer answer : answers) {
            AnswerDto.AnswerResponseDTOV1 responseDTO = new AnswerDto.AnswerResponseDTOV1();
            responseDTO.setQuestionId(answer.getQuestion().getId());
            responseDTO.setAnswerId(answer.getAnswerId());
            responseDTO.setContent(answer.getContent());
            responseDTO.setUserEmail(answer.getMember().getEmail());
            responseDTO.setCreatedAt(answer.getCreatedAt());
            responseDTO.setUpdatedAt(answer.getModifiedAt());

            List<AnswerDto.CommentResponseDTO> commentResponseDTOs = new ArrayList<>();
            List<Comment> comments = commentRepository.findByAnswerIdWithDetails(answer.getAnswerId());
            for(Comment comment : comments){
                AnswerDto.CommentResponseDTO commentDTO = new AnswerDto.CommentResponseDTO();
                commentDTO.setCommentId(comment.getCommentId());
                commentDTO.setContent(comment.getContent());
                commentDTO.setUserEmail(comment.getMember().getEmail());
                commentDTO.setCreatedAt(comment.getCreatedAt());
                commentDTO.setUpdatedAt(comment.getModifiedAt());
                commentResponseDTOs.add(commentDTO);
            }
            responseDTO.setComments(commentResponseDTOs);

            responseDTOList.add(responseDTO);
        }

        return responseDTOList;
    }

    public List<AnswerDto.AnswerResponseDTOV2> findByUserEmail(String userEmail) {
        List<Answer> answers = answerRepository.findByMemberEmail(userEmail);
        List<AnswerDto.AnswerResponseDTOV2> responseDTOList = new ArrayList<>();

            for(Answer answer : answers){
                AnswerDto.AnswerResponseDTOV2 responseDTO = new AnswerDto.AnswerResponseDTOV2();
                responseDTO.setQuestionTitle(answer.getQuestion().getTitle());
                responseDTO.setQuestionId(answer.getQuestion().getId());
                responseDTO.setContent(answer.getContent());
                responseDTOList.add(responseDTO);
            }
              return responseDTOList;
    }
    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public void deleteAnswer(long answerId, String userEmail) {
        Answer foundAnswer = findAnswer(answerId);
        verifyAuthor(userEmail, foundAnswer);
        answerRepository.delete(foundAnswer);
    }

    public Answer updateAnswer(Answer answer, long answerId, String userEmail) {
        Answer foundAnswer = findAnswer(answerId);
        verifyAuthor(userEmail, foundAnswer);
            foundAnswer.setContent(answer.getContent());
            return answerRepository.save(foundAnswer);
    }

    private void verifyAuthor(String principalEmail, Answer answer) {
        String authorEmail = answer.getMember().getEmail();;
        if (!principalEmail.equals(authorEmail)) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_ANSWER);
        }
    }

}




