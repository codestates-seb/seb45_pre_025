package com.codinghaezo.stackOverFlow.domain.question.controller;

import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.PaginatedResponse;
import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.Patch;
import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.Post;
import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.SingleResponse;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.domain.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RequestMapping("/questions")
@RestController
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    public ResponseEntity<?> postQuestion(@RequestBody Post postDto) {
        Question question = postDto.toQuestion();
        URI location = questionService.createQuestion(question);
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{question-id}")
    public ResponseEntity<SingleResponse> getQuestion(@PathVariable("question-id") long questionId) {
        Question foundQuestion = questionService.findQuestion(questionId);
        SingleResponse singleResponseDto = SingleResponse.parse(foundQuestion);
        return ResponseEntity.ok(singleResponseDto);
    }

    @GetMapping
    public ResponseEntity<PaginatedResponse> getPaginatedQuestions(
        @RequestParam int page,
        @RequestParam int size
    ) {
        Page<Question> questionPage = questionService.findQuestions(page - 1, size);
        PaginatedResponse paginatedResponseDto = PaginatedResponse.parse(questionPage);
        return ResponseEntity.ok(paginatedResponseDto);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity<SingleResponse> patchQuestion(
        @PathVariable("question-id") long questionId,
        @RequestBody Patch patchDto
    ) {
        Question question = patchDto.toQuestion();
        Question updatedQuestion = questionService.updateQuestion(questionId, question);
        SingleResponse singleResponseDto = SingleResponse.parse(updatedQuestion);
        return ResponseEntity.ok(singleResponseDto);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable("question-id") long questionId) {
        questionService.deleteQuestion(questionId);
        return ResponseEntity.noContent().build();
    }
}
