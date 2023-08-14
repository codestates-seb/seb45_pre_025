package com.codinghaezo.stackOverFlow.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MemberPostDto{
        @NotBlank
        @Email
        private String email;

    }
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Setter
    public static class MemberPatchDto{
        private long memberId;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class MemberResponseDto {
        private long memberId;

        private String email;

    }
}
