package com.ssafy.skyeye.data.dto.response;

import com.ssafy.skyeye.data.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
    private Long commentId;
    private Long boardId;
    private String userId;
    private String commentContent;
    private String createTime;
    private String updateTime;

    public static CommentDto entityToDto(Comment comment) {
        return CommentDto.builder()
                .commentId(comment.getCommentId())
                .boardId(comment.getBoardId().getBoardId())
                .userId(comment.getUserId().getUserId())
                .commentContent(comment.getCommentContent())
                .createTime(comment.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .updateTime(comment.getUpdatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
    }
}
