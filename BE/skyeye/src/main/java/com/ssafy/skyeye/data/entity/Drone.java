package com.ssafy.skyeye.data.entity;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "drone")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Drone extends BaseEntity{
    @Id
    @Column(name = "drone_id", length = 30, nullable = false)
    private String droneId;
    @Column(name = "drone_pw", length = 70, nullable = false)
    private String dronePw;
    @Column(name = "drone_serial_number", length = 20, nullable = false)
    private String droneSerialNumber;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", nullable = false)
    private User userId;
}