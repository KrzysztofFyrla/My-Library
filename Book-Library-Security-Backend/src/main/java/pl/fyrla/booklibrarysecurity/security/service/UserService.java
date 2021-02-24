package pl.fyrla.booklibrarysecurity.security.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.fyrla.booklibrarysecurity.security.model.User;
import pl.fyrla.booklibrarysecurity.security.repository.UserRepository;

import java.util.Optional;

/**
 * @author Krzysztof
 * @project home-system-api
 */
@AllArgsConstructor
@Service
public class UserService {

    private UserRepository userRepository;

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User transport) {
        return userRepository.save(transport);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
