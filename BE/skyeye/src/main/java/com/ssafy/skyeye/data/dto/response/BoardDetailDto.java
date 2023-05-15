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
public class BoardDetailDto {
    private Long boardId;
    private String boardTitle;
    private String userId;
    private String boardContent;
    private Long boardHits;
    private String createTime;
    private String updateTime;

    public static BoardDetailDto entityToDto(Board board) {
        return BoardDetailDto.builder()
                .boardId(board.getBoardId())
                .boardTitle(board.getBoardTitle())
                .userId(board.getUserId().getUserId())
                .boardContent(board.getBoardContent())
                .boardHits(board.getBoardHits())
                .createTime(board.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .updateTime(board.getUpdatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
    }
}
