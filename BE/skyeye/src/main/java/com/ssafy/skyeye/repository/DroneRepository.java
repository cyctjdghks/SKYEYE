package com.ssafy.skyeye.repository;

import com.ssafy.skyeye.data.entity.Drone;
import com.ssafy.skyeye.data.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DroneRepository extends JpaRepository<Drone, String> {
}
