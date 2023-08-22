package com.codinghaezo.stackOverFlow.member;

import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;

import com.codinghaezo.stackOverFlow.logIn.OAuth2.OAuthProvider;
import com.codinghaezo.stackOverFlow.logIn.utils.CustomAuthorityUtils;
import com.codinghaezo.stackOverFlow.logIn.utils.UserAuthService;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final UserAuthService userAuthService;
    @Lazy
    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder,
                         CustomAuthorityUtils authorityUtils, UserAuthService userAuthService) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
        this.userAuthService = userAuthService;
    }


    public Member createMember(Member member) {

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);
        Member savedMember = memberRepository.save(member);

        return savedMember;
    }
    //POST(OAuth2.0 회원 등록) : OAuth2.0 를 통해 가입된 회원 정보 저장 (DB에 해당 정보 존재하면 해당 엔티티 리턴하고 존재하지 않으면 저장)
    public Member createMemberOAuth2(Member member) {
        Optional<Member> findMember =memberRepository.findByEmail(member.getEmail());
        if(findMember.isPresent()) {
            return findMember.get(); //이미 DB에 저장된 정보가 있다면 반환
        }

        // DB에 저장된 정보가 없다면
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        Member beSavedMember = new Member(
                member.getUserName(),          // DisplayName null (이후 추가로 변경하는 창을 redirection 할 수 있음)
                member.getEmail(), // 구글 이메일을 DB에 등록
                "",                //암호화된 비밀번호 빈 문자열
                roles,               //권한 목록
                member.getProfileImageUrl()
        );

        verifyExistsEmail(member.getEmail());
        Member savedMember = memberRepository.save(beSavedMember);
        return savedMember;
    }

    public Member updateMember(Member member ,HttpServletRequest request)  {
        Member findMember = findVerifiedMember(request);

        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        Optional.ofNullable(member.getUserName())
                .ifPresent(userName -> findMember.setUserName(userName));
        return memberRepository.save(findMember);
    }
    @Transactional(readOnly = true)
    public Member findMember(HttpServletRequest request)  {
        return findVerifiedMember(request);
    }


    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("memberId").descending()));
    }

    public void deleteMember(HttpServletRequest request)  {
        Member findMember = findVerifiedMember(request);

        memberRepository.delete(findMember);
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(HttpServletRequest request) {
        String findEmail = userAuthService.getSignedInUserEmail(request);
        Optional<Member> optionalMember = memberRepository.findByEmail(findEmail);
        return optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

    }

    private void verifyExistsEmail(String email)  {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
    /*
    정말 회원 맞나?

    SecurityContextHolder.getContext().getAuthorization().getPrincipal()

    return member 메일
     */

}
