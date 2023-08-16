package com.codinghaezo.stackOverFlow.domain.question.mapper;

import com.codinghaezo.stackOverFlow.domain.question.dto.QuestionPostDto;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-14T14:35:59+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.2.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question postDtoToQuestion(QuestionPostDto postDto) {
        if ( postDto == null ) {
            return null;
        }

        Question question = new Question();

        return question;
    }
}
