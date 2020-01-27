package com.test.project.acceptence.stepdefinition;

import java.io.FileInputStream;

import java.io.IOException;
import java.util.Properties;

import com.test.project.acceptence.utils.*;

import cucumber.api.java.Before;
import io.restassured.RestAssured;


public class MasterHooks extends Objects {
	@Before
	public static String gettoken() throws IOException {
		
		
			prop=new Properties();
		FileInputStream fis=new FileInputStream(System.getProperty("user.dir")+"//src//test//java//com//test//project//acceptence//files//env.properties");
		prop.load(fis);
		RestAssured.baseURI=prop.getProperty("HOST") + "/openBanking/v1";
/*	res =	given()
				.queryParams("token_name", "Authorization")
				.queryParams("client_id",prop.getProperty("client_id"))
				.queryParams("client_secret", prop.getProperty("client_secret"))
				.queryParams("grant_type", "client_credentials")
				.queryParams("content_type", "application/json").log().all()
				.when()
				.post("/token")
				.then()
				.statusCode(200)
				.extract().response();
		JsonPath js= new JsonPath(res.asString());

		Token = js.get("access_token"); 
		System.out.println("Token: " +Token);
		*/
		Token = "";
		System.out.println("Before hook executed");
		return Token;
		
	}

}
