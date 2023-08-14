package com.codinghaezo.stackOverFlow.answer;

import com.codinghaezo.stackOverFlow.answer.AnswerDto.AnswerCreateDto;
import com.codinghaezo.stackOverFlow.answer.AnswerDto.AnswerResponseDto;
import com.codinghaezo.stackOverFlow.answer.AnswerDto.AnswerUpdateDto;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-14T06:28:52+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.2.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerCreateDtoToAnswer(AnswerCreateDto answerCreateDto) {
        if ( answerCreateDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setContent( answerCreateDto.getContent() );

        return answer;
    }

    @Override
    public Answer answerUpdateDtoToAnswer(AnswerUpdateDto answerUpdateDto) {
        if ( answerUpdateDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setContent( answerUpdateDto.getContent() );

        return answer;
    }

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId( answer.getAnswerId() );
        answerResponseDto.setContent( answer.getContent() );

        return answerResponseDto;
    }
}
