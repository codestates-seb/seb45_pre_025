//package com.codinghaezo.stackOverFlow.bookmark;
//
//import com.codinghaezo.stackOverFlow.answer.Answer;
//import com.codinghaezo.stackOverFlow.answer.AnswerRepository;
//import com.codinghaezo.stackOverFlow.exception.BusinessLogicException;
//import com.codinghaezo.stackOverFlow.exception.ExceptionCode;
//import org.springframework.transaction.annotation.Transactional;
//
//public class BookmarkService {
//    private final AnswerRepository answerRepository;
//
//    public BookmarkService(AnswerRepository answerRepository) {
//        this.answerRepository = answerRepository;
//    }
//
//    @Transactional
//    public String bookmarkA(long answerId, String userEmail) {
//        Answer answer = answerRepository.findById(answerId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
//
//        if(bookmarkRepository.findByAnswerAndMember(answer, member) == null) {
//            // 좋아요를 누른적 없다면 Favorite 생성 후, 즐겨찾기 처리
//            bookmark.setited(board.getFavorited() + 1);
//            Favorite favorite = new Favorite(board, user); // true 처리
//            favoriteRepository.save(favorite);
//            return "즐겨찾기 처리 완료";
//        } else {
//            // 즐겨찾기 누른적 있다면 즐겨찾기 처리 후 테이블 삭제
//            Favorite favorite = favoriteRepository.findFavoriteByBoard(board);
//            favorite.unFavoriteBoard(board);
//            favoriteRepository.delete(favorite);
//            return "즐겨찾기 취소";
//        }
//    }
//
//    private void verifyAuthor(String principalEmail, Answer answer) {
//        String authorEmail = answer.getMember().getEmail();;
//        if (!principalEmail.equals(authorEmail)) {
//            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_ANSWER);
//        }
//
//}
