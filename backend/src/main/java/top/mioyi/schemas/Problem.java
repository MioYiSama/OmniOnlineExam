package top.mioyi.schemas;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "problems")
public class Problem {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @Id
    int id;

    @Column(name = "name")
    String name;
}
