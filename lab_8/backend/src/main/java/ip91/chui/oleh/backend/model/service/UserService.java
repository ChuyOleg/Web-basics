package ip91.chui.oleh.backend.model.service;

import ip91.chui.oleh.backend.model.dto.LoginDto;
import ip91.chui.oleh.backend.model.dto.UserDto;
import ip91.chui.oleh.backend.model.entity.Login;
import ip91.chui.oleh.backend.model.entity.User;
import ip91.chui.oleh.backend.model.exception.InvalidCredentialException;
import ip91.chui.oleh.backend.model.exception.UserAlreadyExistsException;
import ip91.chui.oleh.backend.model.exception.UserDoesNotExistException;
import ip91.chui.oleh.backend.model.mapper.LoginMapper;
import ip91.chui.oleh.backend.model.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

  private final UserMapper userMapper;
  private final LoginMapper loginMapper;
  private final Map<String, User> storage;

  public UserService(@Autowired UserMapper userMapper, @Autowired LoginMapper loginMapper) {
    this.userMapper = userMapper;
    this.loginMapper = loginMapper;

    storage = new HashMap<>();
    initUsers();
  }

  public void login(LoginDto loginDto) {
    Login login = loginMapper.dtoToLogin(loginDto);
    User user = storage.get(login.getLogin());

    if (user == null || !(user.getPassword().equals(login.getPassword()))) {
      throw new InvalidCredentialException();
    }
  }

  public UserDto signUp(UserDto userDto) {
    User user = userMapper.dtoToUser(userDto);
    if (storage.get(user.getLogin()) != null) {
      throw new UserAlreadyExistsException();
    }

    storage.put(user.getLogin(), user);
    return userMapper.userToDto(user);
  }

  public UserDto getByLogin(String login) {
    User user = storage.get(login);
    if (user == null) {
      throw new UserDoesNotExistException();
    }
    return userMapper.userToDto(user);
  }

  public void update(UserDto userDto) {
    User newUser = userMapper.dtoToUser(userDto);
    User oldUser = storage.get(userDto.getLogin());

    if (oldUser == null) {
      throw new UserDoesNotExistException();
    }

    oldUser.setPassword(newUser.getPassword());
    oldUser.setEmail(newUser.getEmail());
    oldUser.setPhone(newUser.getPhone());
  }

  private void initUsers() {
    User user = User.builder()
        .login("Oleh")
        .password("Oleh2002")
        .email("oleh2002@gmail.com")
        .phone("(093)-789-54-12")
        .build();

    storage.put(user.getLogin(), user);
  }

}
