package com.ssafy.skyeye.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "comment")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Comment extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id", nullable = false)
    private Long commentId;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "boardId", nullable = false)
    private Board boardId;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "userId", nullable = false)
    private User userId;
    @Column(name = "comment_content", length = 500, nullable = false)
    private String commentContent;
}
