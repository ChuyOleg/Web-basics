package ip91.chui.oleh.backend.model.mapper;

import ip91.chui.oleh.backend.model.dto.UserDto;
import ip91.chui.oleh.backend.model.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

  public User dtoToUser(UserDto userDto) {
    return User.builder()
        .login(userDto.getLogin())
        .password(userDto.getPassword())
        .email(userDto.getEmail())
        .phone(userDto.getPhone())
        .build();
  }

  public UserDto userToDto(User user) {
    return new UserDto(
        user.getLogin(),
        user.getPassword(),
        user.getEmail(),
        user.getPhone()
    );
  }

}
