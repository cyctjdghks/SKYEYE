package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.CommentRegistDto;
import com.ssafy.skyeye.data.dto.request.CommentUpdateDto;
import com.ssafy.skyeye.data.dto.response.CommentDto;
import com.ssafy.skyeye.data.entity.Board;
import com.ssafy.skyeye.data.entity.Comment;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.repository.BoardRepository;
import com.ssafy.skyeye.repository.CommentRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final BoardRepository boardRepository;

    final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registComment(CommentRegistDto commentRegistDto) {
        Board board = boardRepository.findById(commentRegistDto.getBoardId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        User user = userRepository.findById(commentRegistDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        Comment comment = Comment.builder()
                .boardId(board)
                .userId(user)
                .commentContent(commentRegistDto.getCommentContent())
                .build();

        commentRepository.save(comment);
    }

    @Override
    @Transactional
    public void updateComment(CommentUpdateDto commentUpdateDto) {
        Comment comment = commentRepository.findById(commentUpdateDto.getCommentId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        Board board = boardRepository.findById(commentUpdateDto.getBoardId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        User user = userRepository.findById(commentUpdateDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        comment.setCommentContent(commentUpdateDto.getCommentContent());

    }

    @Override
    public void deleteComment(Long commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        commentRepository.delete(comment);
    }

    @Override
    public List<CommentDto> getCommentByBoard(Long boardId) {
        return commentRepository.findAll().stream()
                .filter(comment -> comment.getBoardId().getBoardId().equals(boardId))
                .map(CommentDto::entityToDto)
                .collect(Collectors.toList());
    }
}
