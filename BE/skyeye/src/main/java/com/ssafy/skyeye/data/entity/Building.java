package com.ssafy.skyeye.data.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "building")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Building extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "building_id", nullable = false)
    private Long buildingId;
    @Column(name = "building_establishment", nullable = false)
    private LocalDateTime buildingEstablishment;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "userId", nullable = false)
    private User userId;
    @Column(name = "building_name", length = 50, nullable = false)
    private String buildingName;
    @Column(name = "building_address", length = 100, nullable = false)
    private String buildingAddress;
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "buildingId", cascade = CascadeType.ALL)
    private Crack crack;
}
