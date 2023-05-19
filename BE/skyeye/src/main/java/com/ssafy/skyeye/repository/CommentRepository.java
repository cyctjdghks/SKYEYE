package com.ssafy.skyeye.repository;

import com.ssafy.skyeye.data.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
