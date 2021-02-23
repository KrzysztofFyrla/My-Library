package pl.fyrla.booklibrarysecurity.bookLibrary.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "books")
public class Books implements Serializable {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long bookId;

    private String title;
    private LocalDate date;
    private String description;
    private String authorName;

    private String imageName;

    @Lob
    private byte[] image;

    @ManyToOne(optional = false)
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private Type typeId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "rating_id", referencedColumnName = "id")
    private Rating ratingId;
}
