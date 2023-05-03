package com.ssafy.skyeye.repository;

import com.ssafy.skyeye.data.dto.response.BuildingDto;
import com.ssafy.skyeye.data.entity.Building;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuildingRepository extends JpaRepository<Building, Long> {

    boolean existsByBuildingAddress(String s);
}
