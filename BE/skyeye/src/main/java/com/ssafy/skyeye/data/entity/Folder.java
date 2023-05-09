package com.ssafy.skyeye.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "folder")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Folder extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "folder_id")
    private Long folderId;
    @Column(name = "folder_name", length = 50)
    private Long folderName;
    @Column(name = "folder_memo", length = 100)
    private Long folderMemo;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "userId", nullable = false)
    private User userId;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "folderId", cascade = CascadeType.ALL)
    private List<Crack> cracks;
}
