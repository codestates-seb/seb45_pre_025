package com.codinghaezo.stackOverFlow.answer;

import lombok.Getter;
import lombok.Setter;

public class AnswerDto {
    @Getter
    @Setter
    public static class AnswerResponseDto {

        private long answerId;
        private String content;

    }
    @Getter
    @Setter
    public static class AnswerCreateDto {

        private String content;

    }

    @Getter
    @Setter
    public static class AnswerUpdateDto {

        private String content;

    }
}
