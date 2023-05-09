package com.ssafy.skyeye.data.entity;

import lombok.*;
import org.springframework.stereotype.Service;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity{
    @Id
    @Column(name = "user_id", length = 30)
    private String userId;
    @Column(name = "user_pw", length = 70)
    private String userPw;
    @Column(name = "user_name", length = 20)
    private String userName;
    @Column(name = "user_position", length = 20)
    private String userPosition;
    @Column(name = "user_phone_number", length = 20)
    private String userPhoneNumber;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "image")
    private Image imageId;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userId", cascade = CascadeType.ALL)
    private List<Folder> folders;
}
