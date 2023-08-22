package com.codinghaezo.stackOverFlow.member;

import com.codinghaezo.stackOverFlow.logIn.utils.UserAuthService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

    @CrossOrigin(origins = "http://pre-project-deploy.s3-website.ap-northeast-2.amazonaws.com")
    @PostMapping("/signup")
    public ResponseEntity postMember(@RequestBody MemberDto.MemberPostDto memberPostDto) {
        System.out.println(memberPostDto);
        Member member = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));
        return new ResponseEntity<>(
                new MemberDto.SingleResponseDto<>(mapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);// + 토큰

    }

    @PatchMapping("/patch")
    public ResponseEntity patchMember(
            @Valid @RequestBody MemberDto.MemberPatchDto memberPatchDto, HttpServletRequest request) {


        Member member = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto), request);

        return new ResponseEntity<>(
                new MemberDto.SingleResponseDto<>(mapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);
    }
    @GetMapping("/get")
    public ResponseEntity getMember(HttpServletRequest request){
        Member member = memberService.findMember(request);

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
    @DeleteMapping("/delete")
    public ResponseEntity deleteMember(HttpServletRequest request){

            memberService.deleteMember(request);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}