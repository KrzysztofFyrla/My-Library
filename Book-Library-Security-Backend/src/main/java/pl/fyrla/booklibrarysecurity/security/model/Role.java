package pl.fyrla.booklibrarysecurity.security.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * @author Krzysztof
 * @project home-system-api
 */
@Entity
@Getter
@Setter
@Table(name = "roles")
public class Role {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;

    public Role() {
    }
}
