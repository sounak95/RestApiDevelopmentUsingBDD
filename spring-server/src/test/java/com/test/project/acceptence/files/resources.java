package com.test.project.acceptence.files;

public class resources {
	public static String addUser()
	{
		String resource="/add-an-user";
		return resource;
	}	

	public static String createAddUserPayload(String firstName, String lastName, String department )
	{
		String payload = "{" +  
				"    \"firstName\": \""+ firstName +"\"," + 
				"    \"lastName\": \""+ lastName +"\"," + 
				"    \"department\": \""+ department +"\"" +
				"}";
	
		return payload;
	}
	
}
