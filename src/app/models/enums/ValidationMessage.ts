export enum ValidationMessage{
  EmailRequired = "E-mail is required.",
  EmailInUse = "E-mail is already in use.",
  PasswordRequired = "Password is required.",
  PasswordMinLength = "Password min length is ",
  PasswordConfirmedRequired = "Password Confirmed is required",
  PasswordsAreDiffrent = "Passwords are diffrent",
  UsernameRequired = "Username is required",
  UsernameMinLength = "Name min length is ",
  UsernameInUse = "Username is already in use",
  UsernameSpace = "Username can't contains spaces"
}

export function validationMessagesList():ValidationMessage[]{
  const messages:ValidationMessage[]=[ValidationMessage.EmailRequired, ValidationMessage.EmailInUse,
  ValidationMessage.PasswordRequired, ValidationMessage.PasswordMinLength, ValidationMessage.PasswordConfirmedRequired,
  ValidationMessage.PasswordsAreDiffrent, ValidationMessage.UsernameRequired, ValidationMessage.UsernameMinLength,
  ValidationMessage.UsernameInUse, ValidationMessage.UsernameSpace]

  return messages
}
