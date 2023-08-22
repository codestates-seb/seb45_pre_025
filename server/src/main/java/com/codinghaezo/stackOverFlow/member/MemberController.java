package com.codinghaezo.stackOverFlow.member;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/users")
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;


    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }




    @PostMapping("/signup")
    public ResponseEntity postMember(@RequestBody MemberDto.MemberPostDto memberPostDto) {
        Member member = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));
        /*
        토큰 발행 메서드
         */
        return new ResponseEntity<>(
                new MemberDto.SingleResponseDto<>(mapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);// + 토큰

    }

//    @GetMapping("/login")
//    public ResponseEntity loginMember(@RequestBody 로그인 디티오) {
//          확인된 이메일 : 정말 등록된 회원이가?
    // + 이 멤버가 갖고 있는 엑세스 토큰 생성(이메일) -> 리턴 토큰
    // + 이 멤버가 갖고 있는 리프레스 토큰 생성(이메일) -> 리턴 토큰

    // return 토큰 + 메일 + http 상태 코드
//    }
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.MemberPatchDto memberPatchDto) {
        memberPatchDto.setMemberId(memberId);

        Member member = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));

        return new ResponseEntity<>(
                new MemberDto.SingleResponseDto<>(mapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);
    }
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member member = memberService.findMember(memberId);

        return new ResponseEntity<>(
                new MemberDto.SingleResponseDto<>(mapper.memberToMemberResponseDto(member))
                , HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
        List<Member> members = pageMembers.getContent();
        return new ResponseEntity<>(
                new MemberDto.MultiResponseDto<>(mapper.membersToMemberResponses(members),
                        pageMembers),
                HttpStatus.OK);
    }
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){

            memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}