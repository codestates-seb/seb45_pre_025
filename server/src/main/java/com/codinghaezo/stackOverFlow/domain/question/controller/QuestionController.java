package com.codinghaezo.stackOverFlow.domain.question.controller;

import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionPostDto;
import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionResponseDto;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.mapper.QuestionMapper;
import com.codinghaezo.stackOverFlow.domain.question.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RequestMapping("/questions")
@RestController
public class QuestionController {

    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping("/ask")
    public ResponseEntity<?> postQuestion(@RequestBody QuestionPostDto postDto) {
        Question mappedQuestion = questionMapper.postDtoToQuestion(postDto);
        Question savedQuestion = questionService.createQuestion(mappedQuestion);
        URI location = UriComponentsBuilder.newInstance()
            .path("/questions/{question-id}")
            .buildAndExpand(savedQuestion.getId())
            .toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{question-id}")
    public ResponseEntity<QuestionResponseDto> getQuestion(@PathVariable("question-id") long questionId) {
        Question foundQuestion = questionService.findQuestion(questionId);
        // response  dto로 매핑한다음 바디로 넣어서 리턴
        return ResponseEntity.ok().build();
    }
}
