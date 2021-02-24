package pl.fyrla.booklibrarysecurity.security.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Krzysztof
 * @project home-system-api
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class PanelController {

    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }

    @GetMapping("/sped")
    @PreAuthorize("hasRole('SPEDYTOR') or hasRole('ADMIN')")
    public String spedytorAccess() {
        return "Spedytor Board.";
    }

    @GetMapping("/drive")
    @PreAuthorize("hasRole('DRIVER') or hasRole('ADMIN')")
    public String driverAccess() {
        return "Driver Board.";
    }

    @GetMapping("/pracownicy")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminPracownicy() {
        return "Admin Board.";
    }

    @GetMapping("/finans")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminFinans() {
        return "Admin Board.";
    }
}
