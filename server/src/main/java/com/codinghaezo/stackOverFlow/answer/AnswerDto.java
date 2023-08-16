package com.codinghaezo.stackOverFlow.answer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

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
}
