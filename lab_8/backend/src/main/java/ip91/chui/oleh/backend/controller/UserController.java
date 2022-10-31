package ip91.chui.oleh.backend.controller;

import ip91.chui.oleh.backend.model.dto.LoginDto;
import ip91.chui.oleh.backend.model.dto.UserDto;
import ip91.chui.oleh.backend.model.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;

  @ResponseStatus(value = HttpStatus.NO_CONTENT)
  @PostMapping("/login")
  public void login(@RequestBody LoginDto loginDto) {
    userService.login(loginDto);
  }

  @PostMapping("/signUp")
  public UserDto signUp(@RequestBody UserDto userDto) {
    return userService.signUp(userDto);
  }

  @GetMapping("/users/{login}")
  public UserDto getByLogin(@PathVariable String login) {
    return userService.getByLogin(login);
  }

  @ResponseStatus(value = HttpStatus.NO_CONTENT)
  @PutMapping("/users")
  public void update(@RequestBody UserDto userDto) {
    userService.update(userDto);
  }

}
