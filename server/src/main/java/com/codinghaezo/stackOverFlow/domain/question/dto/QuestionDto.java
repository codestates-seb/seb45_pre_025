package com.codinghaezo.stackOverFlow.domain.question.dto;

import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class QuestionDto {

    @Getter
    public static class Post {

        private String title;

        private String bodyProblem;

        private String bodyExpecting;

        public Question toQuestion() {
            return Question.builder()
                    .title(this.title)
                    .bodyProblem(this.bodyProblem)
                    .bodyExpecting(this.bodyExpecting)
                    .build();
        }
    }

    @Getter
    public static class Patch {

        private String title;

        private String bodyProblem;

        private String bodyExpecting;

        public Question toQuestion() {
            return Question.builder()
                    .title(this.title)
                    .bodyProblem(this.bodyProblem)
                    .bodyExpecting(this.bodyExpecting)
                    .build();
        }
    }

    @Builder
    @Getter
    public static class SingleResponse {

        private long id;

        private String title;

        private String bodyProblem;

        private String bodyExpecting;

        private long authorId;

        private int views;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        public static SingleResponse parse(Question question) {
            return SingleResponse.builder()
                    .id(question.getId())
                    .title(question.getTitle())
                    .bodyProblem(question.getBodyProblem())
                    .bodyExpecting(question.getBodyExpecting())
                    .authorId(question.getAuthor().getMemberId())
                    .views(question.getViews())
                    .createdAt(question.getCreatedAt())
                    .modifiedAt(question.getModifiedAt())
                    .build();
        }
    }

    @Builder
    @Getter
    public static class PaginatedResponse {

        private long totalContents;

        private int pageSize;

        private int totalPages;

        private int pageNumber;

        private List<SingleResponse> contents;

        public static PaginatedResponse parse(Page<Question> questionPage) {
            return PaginatedResponse.builder()
                    .totalContents(questionPage.getTotalElements())
                    .pageSize(questionPage.getSize())
                    .totalPages(questionPage.getTotalPages())
                    .pageNumber(questionPage.getNumber())
                    .contents(questionPage.getContent()
                            .stream()
                            .map(SingleResponse::parse)
                            .collect(Collectors.toList()))
                    .build();
        }
    }
}
