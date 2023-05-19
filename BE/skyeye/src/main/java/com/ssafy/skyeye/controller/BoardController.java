package com.ssafy.skyeye.controller;

import com.ssafy.skyeye.data.dto.request.BoardRegistDto;
import com.ssafy.skyeye.data.dto.request.BoardUpdateDto;
import com.ssafy.skyeye.data.dto.response.BoardDetailDto;
import com.ssafy.skyeye.data.dto.response.BoardDto;
import com.ssafy.skyeye.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/regist")
    public ResponseEntity<?> registBoard(@RequestBody BoardRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        boardService.registBoard(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateBoard(@RequestBody BoardUpdateDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", input);

        boardService.updateBoard(input);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{boardId}")
    public ResponseEntity<?> deleteBoard(@PathVariable long boardId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", boardId);

        boardService.deleteBoard(boardId);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getAllBoard() {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());

        List<BoardDto> list = boardService.getAllBoard();

        log.info("출력 데이터 : {}", list);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/get/{boardId}")
    public ResponseEntity<?> getBoard(@PathVariable long boardId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 : {}", boardId);

        BoardDetailDto output = boardService.getBoard(boardId);

        log.info("출력 데이터 : {}", output);

        return new ResponseEntity<>(output, HttpStatus.OK);
    }
}
