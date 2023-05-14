package com.ssafy.skyeye.repository;

import com.ssafy.skyeye.data.dto.response.CrackTypeDto;
import com.ssafy.skyeye.data.entity.Crack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CrackRepository extends JpaRepository<Crack, Long> {
    @Query("SELECT new com.ssafy.skyeye.data.dto.response.CrackTypeDto(c.crackType, COUNT(c.crackType)) " +
            "FROM Crack c " +
            "WHERE c.folderId.folderId = :folderId " +
            "GROUP BY c.crackType")
    List<CrackTypeDto> countCrackTypesByFolderId(@Param("folderId") Long folderId);
}
