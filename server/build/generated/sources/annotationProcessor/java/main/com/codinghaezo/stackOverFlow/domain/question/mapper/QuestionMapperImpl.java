package com.codinghaezo.stackOverFlow.domain.question.mapper;

import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.Patch;
import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.Post;
import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionDto.Response;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-16T02:29:52+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.2.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question postDtoToQuestion(Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( postDto.getTitle() );
        question.setBodyProblem( postDto.getBodyProblem() );
        question.setBodyExpecting( postDto.getBodyExpecting() );

        return question;
    }

    @Override
    public Question patchDtoToQuestion(Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( patchDto.getTitle() );
        question.setBodyProblem( patchDto.getBodyProblem() );
        question.setBodyExpecting( patchDto.getBodyExpecting() );

        return question;
    }

    @Override
    public Response questionToResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        Response response = new Response();

        if ( question.getId() != null ) {
            response.setId( question.getId() );
        }
        response.setTitle( question.getTitle() );
        response.setBodyProblem( question.getBodyProblem() );
        response.setBodyExpecting( question.getBodyExpecting() );
        response.setCreatedAt( question.getCreatedAt() );

        return response;
    }
}
