package com.codinghaezo.stackOverFlow.answer.comment;

import com.codinghaezo.stackOverFlow.answer.Answer;
import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CommentService {
    private final CommentRepository commentRepository;


    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }


    public Comment findComment(long commentId){
        return commentRepository.findById(commentId).orElseThrow();
    }

    public  List<CommentDto.CommentResponseDTOV1> getCommentsByAnswerId(long answerId){
        List<Comment> comments = commentRepository.findByAnswerIdWithDetails(answerId);
        List<CommentDto.CommentResponseDTOV1> responseDTOList = new ArrayList<>();

        for(Comment comment : comments){
            CommentDto.CommentResponseDTOV1 responseDTO = new CommentDto.CommentResponseDTOV1();
            responseDTO.setAnswerId(comment.getAnswer().getAnswerId());
            responseDTO.setCommentId(comment.getCommentId());
            responseDTO.setContent(comment.getContent());
            responseDTO.setUserEmail(comment.getMember().getEmail());
            responseDTO.setCreatedAt(comment.getCreatedAt());
            responseDTO.setUpdatedAt(comment.getModifiedAt());
            responseDTOList.add(responseDTO);
        }
        return  responseDTOList;
    }
    public void deleteComment(long commentId, String userEmail) {
        Comment foundComment = findComment(commentId);
        verifyAuthor(userEmail, foundComment);
        commentRepository.delete(foundComment);
    }

    public Comment updateComment(Comment comment, long commentId, String userEmail) {
        Comment foundComment = findComment(commentId);
        verifyAuthor(userEmail, foundComment);
        foundComment.setContent(comment.getContent());
        return commentRepository.save(foundComment);
    }

    private void verifyAuthor(String principalEmail, Comment comment) {
        String authorEmail = comment.getMember().getEmail();;
        if (!principalEmail.equals(authorEmail)) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_COMMENT);
        }
    }



}
