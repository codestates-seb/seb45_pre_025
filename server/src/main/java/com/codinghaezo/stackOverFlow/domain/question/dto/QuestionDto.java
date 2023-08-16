package com.codinghaezo.stackOverFlow.domain.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class QuestionDto {

    @Getter
    public static class Post {

        private long authorId;

        private String title;

        private String bodyProblem;

        private String bodyExpecting;
    }

    @Getter
    public static class Patch {

        private String title;

        private String bodyProblem;

        private String bodyExpecting;
    }

    @Getter
    @Setter
    public static class Response {

        private long id;

        private String title;

        private String bodyProblem;

        private String bodyExpecting;

        private long authorId;

        private LocalDateTime createdAt;
    }
}
