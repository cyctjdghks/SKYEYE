package com.ssafy.skyeye.service.impl;

import com.ssafy.skyeye.data.dto.request.BoardRegistDto;
import com.ssafy.skyeye.data.dto.request.BoardUpdateDto;
import com.ssafy.skyeye.data.dto.response.BoardDetailDto;
import com.ssafy.skyeye.data.dto.response.BoardDto;
import com.ssafy.skyeye.data.entity.Board;
import com.ssafy.skyeye.data.entity.User;
import com.ssafy.skyeye.repository.BoardRepository;
import com.ssafy.skyeye.repository.UserRepository;
import com.ssafy.skyeye.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registBoard(BoardRegistDto boardRegistDto) {
        User user = userRepository.findById(boardRegistDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        Board board = Board.builder()
                .boardTitle(boardRegistDto.getBoardTitle())
                .userId(user)
                .boardContent(boardRegistDto.getBoardContent())
                .build();

        boardRepository.save(board);
    }

    @Override
    @Transactional
    public void updateBoard(BoardUpdateDto boardUpdateDto) {
        Board board = boardRepository.findById(boardUpdateDto.getBoardId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        User user = userRepository.findById(boardUpdateDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        board.setBoardTitle(boardUpdateDto.getBoardTitle());
        board.setBoardContent(boardUpdateDto.getBoardContent());
    }

    @Override
    public void deleteBoard(Long boardId) {
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        boardRepository.delete(board);
    }

    @Override
    public List<BoardDto> getAllBoard() {
        return boardRepository.findAll().stream()
                .map(BoardDto::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public BoardDetailDto getBoard(Long boardId) {
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        board.setBoardHits(board.getBoardHits() + 1);

        return BoardDetailDto.entityToDto(board);
    }
}
