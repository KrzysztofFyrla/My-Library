package pl.fyrla.booklibrarysecurity.bookLibrary.payload;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.fyrla.booklibrarysecurity.bookLibrary.model.Rating;
import pl.fyrla.booklibrarysecurity.bookLibrary.model.Type;

import java.time.LocalDate;

/**
 * @author Krzysztof
 * @project book-library-backend
 */
@Getter
@Setter
@NoArgsConstructor
public class BookResponse {

    private String id;
    private String title;
    private LocalDate date;
    private String description;
    private String imageName;
    private Type typeId;
    private Rating ratingId;

    public BookResponse(String id, String title, LocalDate date, String description,
                        String imageName, Type typeId, Rating ratingId) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.imageName = imageName;
        this.typeId = typeId;
        this.ratingId = ratingId;
    }
}
