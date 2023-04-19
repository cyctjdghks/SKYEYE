package com.ssafy.skyeye.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "building")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Building extends BaseEntity{
    @Id
    @Column(name = "building_id", nullable = false)
    private Long buildingId;

    @Column(name = "building_establishment", nullable = false)
    private LocalDateTime buildingEstablishment;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", nullable = false)
    private User userId;
    @Column(name = "building_name", length = 50, nullable = false)
    private String buildingName;
    @Column(name = "building_address", length = 100, nullable = false)
    private String buildingAddress;
}
