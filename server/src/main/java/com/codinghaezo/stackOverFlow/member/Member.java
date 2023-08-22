package com.codinghaezo.stackOverFlow.member;

import com.codinghaezo.stackOverFlow.audit.Auditable;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.logIn.OAuth2.OAuthProvider;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column
    private String userName;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @Column
    private String profileImageUrl;

    public Member(String email) {
        this.email = email;
    }

    public Member(String userName, String email,
                  String password,
                  List<String> roles,
                  String profileImageUrl
             ) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.profileImageUrl = profileImageUrl;
    }

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Question> questions = new ArrayList<>();


//    private OAuthProvider oAuthProvider;
//
//    @Builder
//    public Member(String email, String userName, OAuthProvider oAuthProvider) {
//        this.email = email;
//        this.userName = userName;
//        this.oAuthProvider = oAuthProvider;
//    }
}
