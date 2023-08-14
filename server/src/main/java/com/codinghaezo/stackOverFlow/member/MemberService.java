package com.codinghaezo.stackOverFlow.member;

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



}
