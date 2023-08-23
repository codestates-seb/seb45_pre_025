package com.codinghaezo.stackOverFlow.answer;

import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import org.springframework.data.domain.Page;

import java.util.List;

public class AnswerDto {

    @Getter
    @Setter
    public static class AnswerResponseDto {
        private long answerId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private long memberId;
        private long questionId;
    }
    @Getter
    @Setter
    public static class AnswerResponseDTOV1 {
        private long questionId;
        private long answerId;
        private String content;
        private String userEmail;
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
        private LocalDateTime createdAt;
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
        private LocalDateTime updatedAt;
        private List<CommentResponseDTO> comments;
    }

    @Getter
    @Setter
    public static class AnswerResponseDTOV2{
        private String questionTitle;
        private long questionId;
        private String content;


    }

    @Getter
    @Setter
    public static class AnswerCreateDto {

        private String content;
        private long questionId;
        private long memberId;

    }

    @Getter
    @Setter
    public static class AnswerUpdateDto {
        private long answerId;
        private String content;
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
        private LocalDateTime updatedAt;


    }

    @Getter
    public static class MultiResponseDto<T> {
        private List<T> data;
        private PageInfo pageInfo;

        public MultiResponseDto(List<T> data, Page page) {
            this.data = data;
            this.pageInfo = new PageInfo(page.getNumber() + 1,
                    page.getSize(), page.getTotalElements(), page.getTotalPages());
        }
    }

    @Getter
    @Setter
    public static class CommentResponseDTO {
        private long commentId;
        private String content;
        private String userEmail;
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
        private LocalDateTime createdAt;
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
        private LocalDateTime updatedAt;


    }
}
