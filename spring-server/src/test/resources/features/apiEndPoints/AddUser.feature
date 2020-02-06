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
    Then a User with name "<firstname>" is created successfully

  Examples:
	  | firstname | lastname   | department |
	  | Michael   |   Jackson  | Finance    |
	 
 @negative
Scenario Outline: add a User with invalid details
    Given the Admin User is registered with the bank
    And has access for adding new User
	When the Admin User provides details like firstname as "<firstname>", lastname as "<lastname>" and department as "<department>"
	Then an error message "invalid user details" is displayed
  Examples:
	   | firstname | lastname | department |
	   | Jonathan  |  null    |	 HR        |
	   