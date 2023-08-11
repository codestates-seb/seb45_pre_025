package com.codinghaezo.stackOverFlow.member;

import com.codinghaezo.stackOverFlow.Utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
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

        return  ResponseEntity.created(location).build();
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Min(2) long memberId,
                                      @Valid @RequestBody MemberDto.MemberPatchDto memberPatchDto) {
        memberPatchDto.setMemberId(memberId);


        return new ResponseEntity<>(memberPatchDto, HttpStatus.OK);
    }
}
