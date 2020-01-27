Feature: Add a new user
    As an Admin User
    I want to add  a new User
    So that a new User is available with the bank
  
#  vocabulary
#  User : Bank employee
#  Admin User : User having admin access
   
@positive
Scenario Outline: add a User with valid details
    Given the Admin User is registered with the bank
    And has access for adding new User
    When the Admin User provides details like firstname as "<firstname>", lastname as "<lastname>" and department as "<department>"
    Then a User is created 
    And a message saying "User successfully created" is provided
  Examples:
	  | firstname | lastname | department |
	  | SS5       |   SS5    |	 finance  |
	 
 @negative
Scenario Outline: add a User with invalid details
    Given the Admin User is registered with the bank
    And has access for adding new User
	When the Admin User provides details like firstname as "<firstname>", lastname as "<lastname>" and department as "<department>"
	Then an error message saying "Missing details" is provided 
  Examples:
	   | firstname | lastname | department |
	   | SS5       |  null    |	 HR   |
	   