package com.codinghaezo.stackOverFlow.answer.comment;

import com.codinghaezo.stackOverFlow.answer.*;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
import com.codinghaezo.stackOverFlow.logIn.utils.UserAuthService;
import com.codinghaezo.stackOverFlow.member.Member;
import com.codinghaezo.stackOverFlow.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/answer")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper mapper;
    private final MemberRepository memberRepository;
    private final UserAuthService userAuthService;
    private final AnswerRepository answerRepository;

    private final CommentRepository commentRepository;


    public CommentController(CommentService commentService,
                            CommentMapper mapper,
                             MemberRepository memberRepository,
                             UserAuthService userAuthService,
                            AnswerRepository answerRepository,
                             CommentRepository commentRepository) {
        this.commentService = commentService;
        this.mapper = mapper;
        this.commentRepository = commentRepository;
        this.answerRepository = answerRepository;
        this.userAuthService = userAuthService;
        this.memberRepository = memberRepository;
    }

    @PostMapping("/{answer-Id}/comment")
    public ResponseEntity postComment(@PathVariable("answer-Id") long answerId,
                                      @RequestBody CommentDto.CommentCreateDto commentDto,
                                      HttpServletRequest request) {
        String userEmail = userAuthService.getSignedInUserEmail(request);
        Member member = memberRepository.findByEmail(userEmail).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        Answer answer = answerRepository.findById(answerId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        Comment newComment = new Comment();
        newComment.setContent(commentDto.getContent());
        newComment.setMember(member);
        newComment.setAnswer(answer);
        newComment.setCreatedAt(LocalDateTime.now());

        commentRepository.save(newComment);
        return ResponseEntity.ok("Comment successfully created.");
    }

    @GetMapping("/{answer-Id}/comments")
    public ResponseEntity<List<CommentDto.CommentResponseDTOV1>> getCommentsByAnswer(@PathVariable("answer-Id") long answerId) {
        List<CommentDto.CommentResponseDTOV1> responseDTOList = commentService.getCommentsByAnswerId(answerId);
        return ResponseEntity.ok(responseDTOList);
    }

    @PatchMapping("/comment/{comment-Id}")
    public ResponseEntity patchComment(@PathVariable("comment-Id") @Positive long commentId,
                                      @RequestBody CommentDto.CommentUpdateDto requestBody,
                                       HttpServletRequest request) {

        String userEmail = userAuthService.getSignedInUserEmail(request);
        Comment updatedComment = commentService.updateComment(mapper.commentUpdateDtoToComment(requestBody), commentId, userEmail);

        CommentDto.CommentUpdateDto updateDto = new CommentDto.CommentUpdateDto();
        updateDto.setCommentId(updatedComment.getCommentId());
        updateDto.setContent(updatedComment.getContent());
        updateDto.setUpdatedAt(updatedComment.getModifiedAt());

        return ResponseEntity.ok(updateDto);
    }

    @DeleteMapping("/comment/{comment-Id}")
    public ResponseEntity deleteComment(@PathVariable("comment-Id") long commentId,
                                        HttpServletRequest request) {
        String userEmail = userAuthService.getSignedInUserEmail(request);
        commentService.deleteComment(commentId,userEmail);
        return ResponseEntity.noContent().build();
    }
}
