package ip91.chui.oleh.backend.model.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class Login {

  private final String login;
  private final String password;

}
