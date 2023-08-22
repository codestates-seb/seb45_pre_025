package com.codinghaezo.stackOverFlow.answer.comment;

import com.codinghaezo.stackOverFlow.answer.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CommentService {
    private final CommentRepository commentRepository;


    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Transactional(readOnly = true)
    public Comment findComment(long commentId){
        return commentRepository.findById(commentId).orElseThrow();
    }
    @Transactional(readOnly = true)
    public List<Comment> findComments(long Id){
        return commentRepository.findByAnswer(Id);
    }

    public Comment createComment(Comment comment){
        return commentRepository.save(comment);
    }

    public void deleteComment(long commentId) {
        Comment foundComment = findComment(commentId);
        commentRepository.delete(foundComment);
    }

    public Comment updateComment(Comment comment, long commentId) {
        Comment foundComment = findComment(commentId);
        foundComment.setContent(comment.getContent());
        return commentRepository.save(foundComment);
    }


}
