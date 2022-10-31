package ip91.chui.oleh.backend.model.entity;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class User {

  private String login;
  private String password;
  private String email;
  private String phone;

}
