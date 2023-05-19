package com.ssafy.skyeye.service;

import com.ssafy.skyeye.data.dto.request.CommentRegistDto;
import com.ssafy.skyeye.data.dto.request.CommentUpdateDto;
import com.ssafy.skyeye.data.dto.response.CommentDto;

import java.util.List;

public interface CommentService {
    void registComment(CommentRegistDto commentRegistDto);
    void updateComment(CommentUpdateDto commentUpdateDto);
    void deleteComment(Long commentId);
    List<CommentDto> getCommentByBoard(Long boardId);
}
