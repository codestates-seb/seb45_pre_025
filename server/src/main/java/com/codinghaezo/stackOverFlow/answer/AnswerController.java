package com.codinghaezo.stackOverFlow.answer;

import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    private final QuestionRepository questionRepository;



    public AnswerController(AnswerService answerService,
                            AnswerMapper mapper,
                            QuestionRepository questionRepository) {
        this.answerService = answerService;
        this.mapper = mapper;
        this.questionRepository = questionRepository;
    }


   @PostMapping("/{question-Id}/answer")
    public ResponseEntity postAnswer(@PathVariable("question-Id") long questionId,@RequestBody AnswerDto.AnswerCreateDto answerDto) {
       Question question = questionRepository.findById(questionId).orElseThrow();
        Answer answer = mapper.answerCreateDtoToAnswer(answerDto);
        answer.setQuestion(question);
        Answer response = answerService.createAnswer(answer);

       URI location = UriComponentsBuilder.newInstance()
               .path("/questions/answers/{answer-id}")
               .buildAndExpand(response.getAnswerId())
               .toUri();
       return ResponseEntity.created(location).build();

    }

   /* @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<Answer> pageAnswer = answerService.findAll(page, size);
        List<Answer> answers = pageAnswer.getContent();
        return ResponseEntity.ok(new AnswerDto.MultiResponseDto(mapper.answersToAnswerResponseDtos(answers), pageAnswer));
    }*/

    @GetMapping("/{question-Id}/answers")
    public ResponseEntity<List<Answer>> getAnswersByQuestion(@PathVariable("question-Id") long questionId) {
        List<Answer> answers = answerService.findAnswers(questionId);
        return ResponseEntity.ok(answers);
    }
  /* 특정사용자가 작성한 답변 전체조회 부분인데 memberId를 어떻게 처리할지 결정되야함
    @GetMapping("/answersByMember")
    public ResponseEntity<List<Answer>> getAnswersByMemberAndQuestion(
            @PathVariable("question-Id") long questionId,
            @AuthenticationPrincipal UserDetails userDetails) {

        String membername = userDetails.getUsername();
        Long memberId = // 토큰에서 추출한 사용자 아이디 값 or 다른 방식으로 memberId를 가져오는 로직

                List<Answer> answers = answerService.findAnswersByMemberIdAndQuestionId(memberId, questionId);
        return ResponseEntity.ok(answers);
    }

   */

    @PatchMapping("/answers/{answer-Id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-Id") @Positive long answerId,
                                    @RequestBody AnswerDto.AnswerUpdateDto requestBody,
                                      @AuthenticationPrincipal UserDetails userDetails)
    {
            String membername = userDetails.getUsername();
                Answer updatedAnswer = answerService.updateAnswer(mapper.answerUpdateDtoToAnswer(requestBody), answerId ,membername);

        return ResponseEntity.ok(mapper.answerToAnswerResponseDto(updatedAnswer));
    }

/*

    @PatchMapping("/answers/{answerId}")
public ResponseEntity<?> updateAnswer(
        @PathVariable Long answerId,
        @RequestBody AnswerDto.AnswerUpdateDto updateDto,
        HttpServletRequest request) {

    // JWT 토큰에서 사용자 정보 추출
    String token = JwtTokenProvider.resolveToken(request);
    Long userId = JwtTokenProvider.getUserIdFromToken(token);

    // 답변 수정
    answerService.updateAnswer(answerId, updateDto.getContent(),userId);

    return ResponseEntity.ok("Answer updated successfully.");
}

     */

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);
        return ResponseEntity.noContent().build();
    }


}