package com.codinghaezo.stackOverFlow.bookmark;

import com.codinghaezo.stackOverFlow.answer.Answer;
import com.codinghaezo.stackOverFlow.audit.Auditable;
import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
import com.codinghaezo.stackOverFlow.member.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Bookmark extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long bookmarkId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
}
