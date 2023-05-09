package com.ssafy.skyeye.repository;

import com.ssafy.skyeye.data.entity.Crack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FolderRepository extends JpaRepository<Crack, Long> {
}
