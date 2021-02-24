package pl.fyrla.booklibrarysecurity.security.controller;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pl.fyrla.booklibrarysecurity.security.model.Role;
import pl.fyrla.booklibrarysecurity.security.service.RolesService;

import javax.validation.Valid;
import java.util.Optional;

/**
 * @author Krzysztof
 * @project home-system-api
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@AllArgsConstructor
@RestController
@RequestMapping("/api/roles")
public class RolesController {

    private RolesService rolesService;

    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Optional<Role> getById(@RequestParam Long id) {
        return rolesService.findById(id);
    }

    @GetMapping("/all")
    //@PreAuthorize("hasAnyRole('ADMIN')")
    public Iterable<Role> getAll() {
        return rolesService.findAll();
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Role addCar(@RequestBody @Valid Role role) {
        return rolesService.save(role);
    }

    @PutMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Role updateCar(@RequestBody Role role) {
        return rolesService.save(role);
    }

    @DeleteMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public void deleteCar(@RequestParam Long id) {
        rolesService.deleteById(id);
    }
}
