package com.codinghaezo.stackOverFlow.answer;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerCreateDtoToAnswer(AnswerDto.AnswerCreateDto answerCreateDto);
    Answer answerUpdateDtoToAnswer(AnswerDto.AnswerUpdateDto answerUpdateDto);
    AnswerDto.AnswerResponseDto answerToAnswerResponseDto(Answer answer);

}
