package com.ssafy.skyeye.data.dto.response;

import com.ssafy.skyeye.data.entity.Board;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {
    private Long boardId;
    private String boardTitle;
    private String userId;
    private Long boardHits;
    private String createTime;
    private String updateTime;

    public static BoardDto entityToDto(Board board) {
        return BoardDto.builder()
                .boardId(board.getBoardId())
                .boardTitle(board.getBoardTitle())
                .userId(board.getUserId().getUserId())
                .boardHits(board.getBoardHits())
                .createTime(board.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .updateTime(board.getUpdatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
    }
}
