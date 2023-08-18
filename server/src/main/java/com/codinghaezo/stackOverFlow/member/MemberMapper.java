package com.codinghaezo.stackOverFlow.member;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")  // (1)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.MemberPostDto memberPostDto);

    Member memberPatchDtoToMember(MemberDto.MemberPatchDto memberPatchDto);

    MemberDto.MemberResponseDto memberToMemberResponseDto(Member member);

    List<MemberDto.MemberResponseDto> membersToMemberResponses(List<Member> members);
}