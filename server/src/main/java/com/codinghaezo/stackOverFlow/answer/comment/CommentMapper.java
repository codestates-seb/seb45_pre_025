package com.codinghaezo.stackOverFlow.answer.comment;

import com.codinghaezo.stackOverFlow.answer.Answer;
import com.codinghaezo.stackOverFlow.answer.AnswerDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentCreateDtoToComment(CommentDto.CommentCreateDto commentCreateDto);
    Comment commentUpdateDtoToComment(CommentDto.CommentUpdateDto commentUpdateDto);
    CommentDto.CommentResponseDto commentToCommentResponseDto(Comment comment);
    List<CommentDto.CommentResponseDto> commentsToCommentResponseDtos(List<Comment> comments);
}
