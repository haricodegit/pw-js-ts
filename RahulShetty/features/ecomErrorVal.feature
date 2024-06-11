Feature: Ecom Login Validation
  
  @Validation
  @ErrorMessages
  Scenario Outline: Scenario Outline name: Ecom login with Invalid Credentials
    Given User Invalid Credentials login Ecom App with "<InvalidUserName>" and "<InvalidPassword>"
    Then Invalid Credentials error displayed

    Examples:
        | InvalidUserName      | InvalidPassword  |
        | InvalidUser1         | password1        |
        | InvalidUser2         | password2        |