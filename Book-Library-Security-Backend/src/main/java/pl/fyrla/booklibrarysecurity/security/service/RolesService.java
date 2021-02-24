package pl.fyrla.booklibrarysecurity.security.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.fyrla.booklibrarysecurity.security.model.Role;
import pl.fyrla.booklibrarysecurity.security.repository.RoleRepository;

import java.util.Optional;

/**
 * @author Krzysztof
 * @project home-system-api
 */
@AllArgsConstructor
@Service
public class RolesService {

    private RoleRepository rolesService;

    public Optional<Role> findById(Long id) {
        return rolesService.findById(id);
    }

    public Iterable<Role> findAll() {
        return rolesService.findAll();
    }

    public Role save(Role role) {
        return rolesService.save(role);
    }

    public void deleteById(Long id) {
        rolesService.deleteById(id);
    }
}
