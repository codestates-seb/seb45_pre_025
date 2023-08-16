package com.codinghaezo.stackOverFlow.member;

import com.codinghaezo.stackOverFlow.Utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/v1/members")
@Validated
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/v1/members";
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@RequestBody MemberDto.MemberPostDto memberPostDto) {
        Member member = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, member.getMemberId());

        return ResponseEntity.created(location).build();
    }


    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.MemberPatchDto memberPatchDto) {
        memberPatchDto.setMemberId(memberId);

        Member member =
                null;
        try {
            member = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return new ResponseEntity<>(
                new MemberDto.SingleResponseDto<>(mapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);
    }
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member member = null;
        try {
            member = memberService.findMember(memberId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(
                new MemberDto.SingleResponseDto<>(mapper.memberToMemberResponseDto(member))
                , HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        try {
            memberService.deleteMember(memberId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}