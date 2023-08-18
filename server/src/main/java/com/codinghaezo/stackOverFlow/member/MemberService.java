package com.codinghaezo.stackOverFlow.member;

import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;


    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;

    }

    public Member createMember(Member member) {
        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    public Member updateMember(Member member) throws Exception {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));

        return memberRepository.save(findMember);
    }
    public Member findMember(long memberId) throws Exception {
        return findVerifiedMember(memberId);
    }

    public void deleteMember(long memberId) throws Exception {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    private void verifyExistsEmail(String email) throws Exception {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new Exception();
    }


}
