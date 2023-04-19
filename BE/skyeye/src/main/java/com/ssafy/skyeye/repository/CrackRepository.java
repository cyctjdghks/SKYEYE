package com.ssafy.skyeye.repository;

import com.ssafy.skyeye.data.entity.Crack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrackRepository extends JpaRepository<Crack, Long> {
}
