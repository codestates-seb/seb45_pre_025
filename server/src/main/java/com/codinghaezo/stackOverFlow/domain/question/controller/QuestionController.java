package com.codinghaezo.stackOverFlow.domain.question.controller;

import com.codinghaezo.stackOverFlow.Utils.UriCreator;
import com.codinghaezo.stackOverFlow.domain.question.dto.PaginatedResponseDto;
import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.*;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.mapper.QuestionMapper;
import com.codinghaezo.stackOverFlow.domain.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<?> postQuestion(@RequestBody Post postDto) {
        Question mappedQuestion = questionMapper.postDtoToQuestion(postDto);
        Question savedQuestion = questionService.createQuestion(mappedQuestion);
        URI location = UriCreator.createUri("/questions", savedQuestion.getId());
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{question-id}")
    public ResponseEntity<Response> getQuestion(@PathVariable("question-id") long questionId) {
        Question foundQuestion = questionService.findQuestion(questionId);
        Response responseDto = questionMapper.questionToResponseDto(foundQuestion);
        return ResponseEntity.ok(responseDto);
    }

    @GetMapping
    public ResponseEntity<PaginatedResponseDto<Response>> getPaginatedQuestions(
        @RequestParam int page,
        @RequestParam int size
    ) {
        Page<Question> foundQuestions = questionService.findQuestions(page - 1, size);
        PaginatedResponseDto<Response> paginatedResponseDto =
            questionMapper.questionsToPaginatedResponseDto(foundQuestions);
        return ResponseEntity.ok(paginatedResponseDto);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity<Response> patchQuestion(
        @PathVariable("question-id") long questionId,
        @RequestBody Patch patchDto
    ) {
        Question question = questionMapper.patchDtoToQuestion(patchDto);
        question.setId(questionId);
        Question updatedQuestion = questionService.updateQuestion(question);
        Response responseDto = questionMapper.questionToResponseDto(updatedQuestion);
        return ResponseEntity.ok(responseDto);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable("question-id") long questionId) {
        questionService.deleteQuestion(questionId);
        return ResponseEntity.noContent().build();
    }
}
