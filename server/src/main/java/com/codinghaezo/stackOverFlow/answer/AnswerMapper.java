package com.codinghaezo.stackOverFlow.answer;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerCreateDtoToAnswer(AnswerDto.AnswerCreateDto answerCreateDto);
    Answer answerUpdateDtoToAnswer(AnswerDto.AnswerUpdateDto answerUpdateDto);
    AnswerDto.AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    List<AnswerDto.AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);

}
