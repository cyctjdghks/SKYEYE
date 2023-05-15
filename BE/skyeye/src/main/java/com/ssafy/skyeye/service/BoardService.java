package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.BoardRegistDto;
import com.ssafy.skyeye.data.dto.request.BoardUpdateDto;
import com.ssafy.skyeye.data.dto.response.BoardDetailDto;
import com.ssafy.skyeye.data.dto.response.BoardDto;

import java.util.List;

public interface BoardService {
    void registBoard(BoardRegistDto boardRegistDto);
    void updateBoard(BoardUpdateDto boardUpdateDto);
    void deleteBoard(Long boardId);
    List<BoardDto> getAllBoard();
    List<BoardDetailDto> getBoard(Long boardId);
}
