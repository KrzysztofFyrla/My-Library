package pl.fyrla.booklibrarysecurity.security.controller;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pl.fyrla.booklibrarysecurity.security.model.User;
import pl.fyrla.booklibrarysecurity.security.service.UserService;

import javax.validation.Valid;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project home-system-api
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    @GetMapping
    /*@PreAuthorize("hasAnyRole('ADMIN', 'FORWARDER', 'USER', 'DRIVER')")*/
    public Optional<User> getById(@RequestParam Long id) {
        return userService.findById(id);
    }

    @GetMapping("/all")
    /*@PreAuthorize("hasAnyRole('ADMIN', 'FORWARDER', 'USER', 'DRIVER')")*/
    public Iterable<User> getAll() {
        return userService.findAll();
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public User addCar(@RequestBody @Valid User user) {
        return userService.save(user);
    }

    @PutMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    public User updateCar(@RequestBody User user) {
        return userService.save(user);
    }

    @DeleteMapping
    //@PreAuthorize("hasAnyRole('ADMIN')")
    public void deleteCar(@RequestParam Long id) {
        userService.deleteById(id);
    }
}
