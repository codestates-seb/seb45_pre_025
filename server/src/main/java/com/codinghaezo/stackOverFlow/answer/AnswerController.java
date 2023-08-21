package com.codinghaezo.stackOverFlow.answer;

import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
import com.codinghaezo.stackOverFlow.logIn.utils.UserAuthService;
import com.codinghaezo.stackOverFlow.member.Member;
import com.codinghaezo.stackOverFlow.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.HttpStatus;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/question")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;
    private final AnswerRepository answerRepository;
    private final UserAuthService userAuthService;

    public AnswerController(AnswerService answerService,
                            AnswerMapper mapper,
                            QuestionRepository questionRepository,
                            MemberRepository memberRepository,
                            AnswerRepository answerRepository,
                            UserAuthService userAuthService) {

        this.answerService = answerService;
        this.mapper = mapper;
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
        this.userAuthService = userAuthService;
        this.memberRepository = memberRepository;
    }

//답변등록
   @PostMapping("/{question-Id}/answer")
    public ResponseEntity postAnswer(@PathVariable("question-Id") long questionId,
                                     @RequestBody AnswerDto.AnswerCreateDto answerDto,
                                                HttpServletRequest request) {
       String userEmail = userAuthService.getSignedInUserEmail(request);
       Member member = memberRepository.findByEmail(userEmail).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

       Question question = questionRepository.findById(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

       Answer newAnswer = new Answer();
       newAnswer.setContent(answerDto.getContent());
       newAnswer.setMember(member);
       newAnswer.setQuestion(question);
       newAnswer.setCreatedAt(LocalDateTime.now());

       answerRepository.save(newAnswer);

       return ResponseEntity.ok("Answer successfully created.");
   }
      /* String userEmail = userAuthService.getSignedInUserEmail(request);
        Question question = questionRepository.findById(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        Answer answer = mapper.answerCreateDtoToAnswer(answerDto);
        answer.setQuestion(question);
        Answer response = answerService.createAnswer(answer);

       URI location = UriComponentsBuilder.newInstance()
               .path("/question/answers/{answer-id}")
               .buildAndExpand(response.getAnswerId())
               .toUri();
       return ResponseEntity.created(location).build();

    }

       */

//질문에 대한 답변들 조회
    @GetMapping("/{question-Id}/answers")
    public ResponseEntity<List<AnswerDto.AnswerResponseDTOV1>> getAnswersByQuestion(@PathVariable("question-Id") long questionId) {
        List<AnswerDto.AnswerResponseDTOV1> responseDTOList = answerService.getAnswersByQuestionId(questionId);
        return ResponseEntity.ok(responseDTOList);
    }

//내가 작성한 답변들 조회
    @GetMapping("/answersByMember")
    public ResponseEntity<List<AnswerDto.AnswerResponseDTOV2>> getAnswersByMember(HttpServletRequest request)
    {
        String userEmail = userAuthService.getSignedInUserEmail(request);
        List<AnswerDto.AnswerResponseDTOV2> answers = answerService.findByUserEmail(userEmail);
        return ResponseEntity.ok(answers);
    }


//답변 수정
    @PatchMapping("/answer/{answer-Id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-Id") @Positive long answerId,
                                    @RequestBody AnswerDto.AnswerUpdateDto requestBody,
                                      HttpServletRequest request)
    {
        String userEmail = userAuthService.getSignedInUserEmail(request);
        Answer updatedAnswer = answerService.updateAnswer(mapper.answerUpdateDtoToAnswer(requestBody), answerId ,userEmail);

        AnswerDto.AnswerUpdateDto updateDto = new AnswerDto.AnswerUpdateDto();
        updateDto.setAnswerId(updatedAnswer.getAnswerId());
        updateDto.setContent(updatedAnswer.getContent());
        updateDto.setUpdatedAt(updatedAnswer.getModifiedAt());

        return ResponseEntity.ok(updateDto);
    }
//답변삭제
    @DeleteMapping("answer/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId,
                                       HttpServletRequest request) {
        String userEmail = userAuthService.getSignedInUserEmail(request);
        answerService.deleteAnswer(answerId,userEmail);
        return ResponseEntity.noContent().build();
    }


}