Feature: Ecom flow end to end

  Scenario: Place an Order and Verify
    Given User login Ecom App with "resttassuredd@gmail.com" and "Welcome@123"
    When Add item to Cart "IPhone 15 Pro Max"
    Then Verify item "IPhone 15 Pro Max" added to Cart
    # When Place Order with valid details "Country" and "resttassuredd@gmail.com" and "Thankyou for the order."
    When Place Order with valid details "Country", "resttassuredd@gmail.com", "1111 2222 3333 4444", "12", "31", "154", "Ramesh Kumar", "rahulshettyacademy", "Thankyou for the order."
    Then Verify Order in Order History