//package com.codinghaezo.stackOverFlow.bookmark;
//
//import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
//import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
//import com.codinghaezo.stackOverFlow.logIn.utils.UserAuthService;
//import com.codinghaezo.stackOverFlow.member.Member;
//import com.codinghaezo.stackOverFlow.member.MemberRepository;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import com.codinghaezo.stackOverFlow.answer.*;
//import com.codinghaezo.stackOverFlow.domain.question.entity.Question;
//import com.codinghaezo.stackOverFlow.domain.question.repository.QuestionRepository;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.util.UriComponentsBuilder;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.validation.constraints.Positive;
//import java.net.URI;
//import java.util.List;
//
//@RestController
//@RequestMapping("/members")
//public class BookmarkController {
//
//    private final AnswerService answerService;
//    private final AnswerMapper mapper;
//
//    private final QuestionRepository questionRepository;
//    private final MemberRepository memberRepository;
//    private final AnswerRepository answerRepository;
//    private final UserAuthService userAuthService;
//
//    public BookmarkController(AnswerService answerService,
//                            AnswerMapper mapper,
//                            QuestionRepository questionRepository,
//                            MemberRepository memberRepository,
//                            AnswerRepository answerRepository,
//                            UserAuthService userAuthService) {
//
//        this.answerService = answerService;
//        this.mapper = mapper;
//        this.questionRepository = questionRepository;
//        this.answerRepository = answerRepository;
//        this.userAuthService = userAuthService;
//        this.memberRepository = memberRepository;
//    }
//
//    @PostMapping("/bookmark/{question-Id}")
//    public ResponseEntity<String> bookmarkQ(@PathVariable("question-Id") @Positive long questionId) {
//        bookmarkService.bookmarkQ(questionId);
//        return ResponseEntity.ok("Bookmark added successfully.");
//    }
//
//    @PostMapping("/bookmark/{answer-Id}")
//    public ResponseEntity bookmarkA(@PathVariable("answer-Id") @Positive long answerId,
//                                    HttpServletRequest request) {
//        String userEmail = userAuthService.getSignedInUserEmail(request);
//        Member member = memberRepository.findByEmail(userEmail).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//
//        bookmarkService.bookmarkA(answerId, userEmail);
//        return ResponseEntity.ok("Bookmark added successfully.");
//    }
//
//    @GetMapping("/bookmarked-questions")
//    public ResponseEntity<List<QuestionDto>> getBookmarkedQuestions(@PathVariable Long memberId) {
//        List<QuestionDto> bookmarkedQuestions = bookmarkService.getBookmarkedQuestions(memberId);
//        return ResponseEntity.ok(bookmarkedQuestions);
//    }
//
//    @GetMapping("/bookmarked-answers")
//    public ResponseEntity<List<AnswerDto>> getBookmarkedAnswers(@PathVariable Long memberId) {
//        List<AnswerDto> bookmarkedAnswers = bookmarkService.getBookmarkedAnswers(memberId);
//        return ResponseEntity.ok(bookmarkedAnswers);
//    }
///*
//    @DeleteMapping("/bookmark/{question-Id}")
//    public ResponseEntity<String> removeBookmark(@PathVariable Long memberId, @PathVariable Long targetId) {
//        bookmarkService.removeBookmark(memberId, targetId);
//        return ResponseEntity.ok("Bookmark removed successfully.");
//    }
//    @DeleteMapping("/bookmark/{answer-Id}")
//    public ResponseEntity<String> removeBookmark(@PathVariable Long memberId, @PathVariable Long targetId) {
//        bookmarkService.removeBookmark(memberId, targetId);
//        return ResponseEntity.ok("Bookmark removed successfully.");
//    }
//
// */
//}
//
