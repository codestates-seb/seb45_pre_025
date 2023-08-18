package com.codinghaezo.stackOverFlow.answer.comment;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class CommentDto {
    @Getter
    @Setter
    public static class CommentResponseDto {
        private long commentId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private long memberId;
        private long answerId;
    }

    @Getter
    @Setter
    public static class CommentCreateDto {

        private String content;
        private long answerId;
        private long memberId;

    }

    @Getter
    @Setter
    public static class CommentUpdateDto {

        private String content;


    }
}
