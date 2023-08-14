package com.codinghaezo.stackOverFlow.answer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity postMember(@RequestBody AnswerDto.AnswerCreateDto AnswerDto) {

        Answer answer = mapper.answerCreateDtoToAnswer(AnswerDto);

        Answer response = answerService.createAnswer(answer);


        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response),
                HttpStatus.CREATED);
    }
}