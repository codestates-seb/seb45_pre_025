package com.codinghaezo.stackOverFlow.member;

import com.codinghaezo.stackOverFlow.audit.Auditable;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private String nickName;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();


    public Member(String email) {
        this.email = email;
    }


    public Member(String nickName, String email, String password, List<String> roles) {
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
  
    @OneToMany(mappedBy = "author")
    private List<Question> questions = new ArrayList<>();

}
