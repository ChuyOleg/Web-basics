package ip91.chui.oleh.backend.model.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(value = {InvalidCredentialException.class})
  public ResponseEntity<String> handleAuthorizationException(InvalidCredentialException e) {
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credential");
  }

  @ExceptionHandler(value = {UserAlreadyExistsException.class})
  public ResponseEntity<String> handleUserAlreadyExistsException(UserAlreadyExistsException e) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exist with this login");
  }

  @ExceptionHandler(value = {UserDoesNotExistException.class})
  public ResponseEntity<String> handleUserDoesntExistException(UserDoesNotExistException e) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User doesn't exist");
  }

}
