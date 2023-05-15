package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.CommentRegistDto;
import com.ssafy.skyeye.data.dto.request.CommentUpdateDto;
import com.ssafy.skyeye.data.dto.response.CommentDto;
import com.ssafy.skyeye.service.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/regist")
    public ResponseEntity<?> registComment(@RequestBody CommentRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        commentService.registComment(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateComment(@RequestBody CommentUpdateDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        commentService.updateComment(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable long commentId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", commentId);

        commentService.deleteComment(commentId);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/get/{boardId}")
    public ResponseEntity<?> getCommentByBoard(@PathVariable long commentId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", commentId);

        List<CommentDto> list = commentService.getCommentByBoard(commentId);

        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
