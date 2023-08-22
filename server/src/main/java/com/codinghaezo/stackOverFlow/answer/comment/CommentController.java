package com.codinghaezo.stackOverFlow.answer.comment;

import com.codinghaezo.stackOverFlow.answer.*;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/answers")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper mapper;

    private final AnswerRepository answerRepository;


    public CommentController(CommentService commentService,
                            CommentMapper mapper,
                            AnswerRepository answerRepository) {
        this.commentService = commentService;
        this.mapper = mapper;
        this.answerRepository = answerRepository;
    }

    @PostMapping("/{answer-Id}/comment")
    public ResponseEntity postComment(@PathVariable("answer-Id") long answerId,@RequestBody CommentDto.CommentCreateDto commentDto) {
        Answer answer = answerRepository.findById(answerId).orElseThrow();
        Comment comment = mapper.commentCreateDtoToComment(commentDto);
        comment.setAnswer(answer);
        Comment response = commentService.createComment(comment);

        URI location = UriComponentsBuilder.newInstance()
                .path("/answers/comments/{comment-id}")
                .buildAndExpand(response.getCommentId())
                .toUri();
        return ResponseEntity.created(location).build();

    }

    @GetMapping("/{answer-Id}/comments")
    public ResponseEntity<List<Comment>> getCommentsByAnswer(@PathVariable("answer-Id") long answerId) {
        List<Comment> comments = commentService.findComments(answerId);
        return ResponseEntity.ok(comments);
    }

    @PatchMapping("/{answer-Id}/comments/{comment-Id}")
    public ResponseEntity patchComment(@PathVariable("comment-Id") @Positive long commentId,
                                      @RequestBody CommentDto.CommentUpdateDto requestBody) {
        Comment updatedComment = commentService.updateComment(mapper.commentUpdateDtoToComment(requestBody), commentId);
        return ResponseEntity.ok(mapper.commentToCommentResponseDto(updatedComment));
    }

    @DeleteMapping("/{answer-Id}/comments/{comment-Id}")
    public ResponseEntity deleteComment(@PathVariable("comment-Id") long commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.noContent().build();
    }
}
