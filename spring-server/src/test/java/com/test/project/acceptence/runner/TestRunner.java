package com.test.project.acceptence.runner;

import java.io.File;
import java.io.IOException;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;
import com.test.project.acceptence.utils.ReusableMethods;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;



@RunWith(Cucumber.class)

@CucumberOptions(features = { "src/test/resources/features" }, glue = {
		"com.test.project.acceptence.stepdefinition" }, monochrome = true, dryRun = false, tags = {}, 
				plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json", "junit:target/cucumber-reports/Cucumber.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"})

public class TestRunner extends AbstractTestNGCucumberTests {
	@AfterClass
	public static void writeExtentReport() throws IOException {
		Reporter.loadXMLConfig(new File(System.getProperty("user.dir") + "//src//test//java//com//test//project//acceptence//utils//ReportsConfig.xml"));
		ReusableMethods.copyLatestExtentReport();
	}
}