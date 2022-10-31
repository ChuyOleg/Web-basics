package ip91.chui.oleh.backend.model.mapper;

import ip91.chui.oleh.backend.model.dto.LoginDto;
import ip91.chui.oleh.backend.model.entity.Login;
import org.springframework.stereotype.Component;

@Component
public class LoginMapper {

  public Login dtoToLogin(LoginDto loginDto) {
    return new Login(loginDto.getLogin(), loginDto.getPassword());
  }

}
