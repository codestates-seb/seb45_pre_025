package com.codinghaezo.stackOverFlow.member;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")  // (1)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.MemberPostDto memberPostDto);

    Member memberPatchDtoToMember(MemberDto.MemberPatchDto memberPatchDto);

    MemberDto.MemberResponseDto memberToMemberResponseDto(Member member);
}