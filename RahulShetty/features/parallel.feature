Feature: Run Flow Parallel

  @Regression
  @EndtoEndFlow
    Scenario Outline: Scenario Outline name: Place an Order and Verify
    Given User login Ecom App with "<userName>" and "<password>"
    When Add item to Cart "<productName>"
    Then Verify item "<productName>" added to Cart
    # When Place Order with valid details "Country" and "resttassuredd@gmail.com" and "Thankyou for the order."
    When Place Order with valid details "Country", "resttassuredd@gmail.com", "1111 2222 3333 4444", "12", "31", "154", "Ramesh Kumar", "rahulshettyacademy", "Thankyou for the order."
    Then Verify Order in Order History


    Examples:
        | userName                 | password     | productName       |
        | resttassuredd@gmail.com  | Welcome@123  | IPhone 15 Pro Max |
        | restassured@gmail.com    | Welcome@123  | ZARA COAT 3       |


 @Validation
  @ErrorMessages
  Scenario Outline: Scenario Outline name: Ecom login with Invalid Credentials
    Given User Invalid Credentials login Ecom App with "<InvalidUserName>" and "<InvalidPassword>"
    Then Invalid Credentials error displayed

    Examples:
        | InvalidUserName      | InvalidPassword  |
        | InvalidUser1         | password1        |
        | InvalidUser2         | password2        |