package com.ssafy.skyeye.repository;

import com.ssafy.skyeye.data.entity.Folder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FolderRepository extends JpaRepository<Folder, Long> {
}
