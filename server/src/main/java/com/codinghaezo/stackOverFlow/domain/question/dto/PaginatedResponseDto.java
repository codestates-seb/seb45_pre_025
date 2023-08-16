package com.codinghaezo.stackOverFlow.domain.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PaginatedResponseDto<T> {

    private long totalItems;

    private int pageSize;

    private int totalPages;

    private int pageNumber;

    private List<T> data;
}
