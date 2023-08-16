package com.codinghaezo.stackOverFlow.domain.question.mapper;

import com.codinghaezo.stackOverFlow.domain.question.dto.PaginatedResponseDto;
import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.*;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question postDtoToQuestion(Post postDto);

    Question patchDtoToQuestion(Patch patchDto);

    Response questionToResponseDto(Question question);

    default PaginatedResponseDto<Response> questionsToPaginatedResponseDto(Page<Question> questions) {
        PaginatedResponseDto<Response> paginatedResponseDto = new PaginatedResponseDto<>();
        paginatedResponseDto.setTotalItems(questions.getTotalElements());
        paginatedResponseDto.setPageSize(questions.getSize());
        paginatedResponseDto.setTotalPages(questions.getTotalPages());
        paginatedResponseDto.setPageNumber(questions.getNumber() + 1);
        paginatedResponseDto.setData(questions.getContent()
            .stream()
            .map(this::questionToResponseDto)
            .collect(Collectors.toList()));
        return paginatedResponseDto;
    }
}
