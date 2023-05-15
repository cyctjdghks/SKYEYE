package com.ssafy.skyeye.data.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "board")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Board extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id", nullable = false)
    private Long boardId;
    @Column(name = "board_title", length = 50, nullable = false)
    private String boardTitle;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "userId", nullable = false)
    private User userId;
    @Column(name = "board_content", length = 1000, nullable = false)
    private String boardContent;
    @Column(name = "board_hits")
    private Long boardHits;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "boardId", cascade = CascadeType.ALL)
    private List<Comment> comments;
}
