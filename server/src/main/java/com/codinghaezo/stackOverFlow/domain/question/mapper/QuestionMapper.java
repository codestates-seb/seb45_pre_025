package com.codinghaezo.stackOverFlow.domain.question.mapper;

import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionPostDto;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question postDtoToQuestion(QuestionPostDto postDto);
}
