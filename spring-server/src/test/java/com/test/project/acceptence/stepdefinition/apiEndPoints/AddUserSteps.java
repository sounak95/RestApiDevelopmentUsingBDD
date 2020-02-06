package com.test.project.acceptence.stepdefinition.apiEndPoints;


import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import static org.junit.Assert.*;

import java.util.Properties;

import static io.restassured.RestAssured.given;

import com.test.project.acceptence.utils.*;
import com.test.project.acceptence.files.resources;

import org.apache.logging.log4j.*;

import com.cucumber.listener.Reporter;

public class AddUserSteps extends Objects {

	@Given("^the Admin User is registered with the bank$")
	public void the_Admin_User_is_registered_with_the_bank() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("the Admin User is registered with the bank");
	}

	@Given("^has access for adding new User$")
	public void has_access_for_adding_new_User() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("has access for adding new User");
	}

	@When("^the Admin User provides details like firstname as \"([^\"]*)\", lastname as \"([^\"]*)\" and department as \"([^\"]*)\"$")
	public void the_Admin_User_provides_details_like_firstname_as_lastname_as_and_department_as(String arg1, String arg2, String arg3) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		RestAssuredHelper.sendPostRequest(resources.addUser(), resources.createAddUserPayload(arg1, arg2, arg3));
	}


	@Then("^a User with name \"([^\"]*)\" is created successfully$")
	public void a_User_with_name_is_created_successfully(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    RestAssuredHelper.validateResponseStatus(201);
	    assertTrue(js.get("firstName").equals(arg1));
	}

	@Then("^an error message \"([^\"]*)\" is displayed$")
	public void an_error_message_is_displayed(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		RestAssuredHelper.validateResponseStatus(400);
	}

}
