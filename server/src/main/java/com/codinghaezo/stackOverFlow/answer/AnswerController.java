package com.codinghaezo.stackOverFlow.answer;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService,
                            AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }


   @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerDto.AnswerCreateDto AnswerDto) {

        Answer answer = mapper.answerCreateDtoToAnswer(AnswerDto);

        Answer response = answerService.createAnswer(answer);

       URI location = UriComponentsBuilder.newInstance()
               .path("/answers/{answer-id}")
               .buildAndExpand(response.getAnswerId())
               .toUri();
       return ResponseEntity.created(location).build();

    }


    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<Answer> pageAnswer = answerService.findAll(page, size);
        List<Answer> answers = pageAnswer.getContent();
        return ResponseEntity.ok(new AnswerDto.MultiResponseDto(mapper.answersToAnswerResponseDtos(answers), pageAnswer));
    }

//    @PatchMapping("/{answer-id}")
//    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
//                                    @RequestBody AnswerDto.AnswerUpdateDto requestBody) {
//
//                Answer updatedAnswer = answerService.updateAnswer(mapper.answerUpdateDtoToAnswer(requestBody), answerId);
//
//        return ResponseEntity.ok(mapper.answerToAnswerResponseDto(updatedAnswer));
//    }


    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);
        return ResponseEntity.noContent().build();
    }


}