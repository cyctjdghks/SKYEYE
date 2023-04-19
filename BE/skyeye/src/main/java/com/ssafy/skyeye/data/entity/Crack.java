package com.ssafy.skyeye.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "crack")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Crack extends BaseEntity{
    @Id

    @Column(name = "crack_id", nullable = false)
    private Long crackId;
    @Column(name = "crack_type", length = 50, nullable = false)
    private String crackType;
    @Column(name = "crack_position", length = 70, nullable = false)
    private String crackPosition;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "buildingId", nullable = false)
    private Building buildingId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "imageId", nullable = false)
    private Image imageId;
}
