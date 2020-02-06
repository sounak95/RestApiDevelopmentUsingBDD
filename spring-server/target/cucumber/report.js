$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("apiEndPoints/AddUser.feature");
formatter.feature({
  "line": 1,
  "name": "Add a new user",
  "description": "  As an Admin User\r\n  I want to add  a new User\r\n  So that a new User is available with the bank",
  "id": "add-a-new-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#  vocabulary"
    },
    {
      "line": 7,
      "value": "#  User : Bank employee"
    },
    {
      "line": 8,
      "value": "#  Admin User : User having admin access"
    }
  ],
  "line": 11,
  "name": "add a User with valid details",
  "description": "",
  "id": "add-a-new-user;add-a-user-with-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the Admin User is registered with the bank",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "has access for adding new User",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the Admin User provides details like firstname as \"\u003cfirstname\u003e\", lastname as \"\u003clastname\u003e\" and department as \"\u003cdepartment\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "a User with name \"\u003cfirstname\u003e\" is created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "add-a-new-user;add-a-user-with-valid-details;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "department"
      ],
      "line": 18,
      "id": "add-a-new-user;add-a-user-with-valid-details;;1"
    },
    {
      "cells": [
        "Michael",
        "Jackson",
        "Finance"
      ],
      "line": 19,
      "id": "add-a-new-user;add-a-user-with-valid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 318540942,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "add a User with valid details",
  "description": "",
  "id": "add-a-new-user;add-a-user-with-valid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the Admin User is registered with the bank",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "has access for adding new User",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the Admin User provides details like firstname as \"Michael\", lastname as \"Jackson\" and department as \"Finance\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "a User with name \"Michael\" is created successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserSteps.the_Admin_User_is_registered_with_the_bank()"
});
formatter.result({
  "duration": 75607735,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.has_access_for_adding_new_User()"
});
formatter.result({
  "duration": 51482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 51
    },
    {
      "val": "Jackson",
      "offset": 74
    },
    {
      "val": "Finance",
      "offset": 102
    }
  ],
  "location": "AddUserSteps.the_Admin_User_provides_details_like_firstname_as_lastname_as_and_department_as(String,String,String)"
});
formatter.result({
  "duration": 1427314753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 18
    }
  ],
  "location": "AddUserSteps.a_User_with_name_is_created_successfully(String)"
});
formatter.result({
  "duration": 361457929,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "add a User with invalid details",
  "description": "",
  "id": "add-a-new-user;add-a-user-with-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the Admin User is registered with the bank",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "has access for adding new User",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the Admin User provides details like firstname as \"\u003cfirstname\u003e\", lastname as \"\u003clastname\u003e\" and department as \"\u003cdepartment\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "an error message \"invalid user details\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "add-a-new-user;add-a-user-with-invalid-details;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "department"
      ],
      "line": 28,
      "id": "add-a-new-user;add-a-user-with-invalid-details;;1"
    },
    {
      "cells": [
        "Jonathan",
        "null",
        "HR"
      ],
      "line": 29,
      "id": "add-a-new-user;add-a-user-with-invalid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 324407,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "add a User with invalid details",
  "description": "",
  "id": "add-a-new-user;add-a-user-with-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the Admin User is registered with the bank",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "has access for adding new User",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the Admin User provides details like firstname as \"Jonathan\", lastname as \"null\" and department as \"HR\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "an error message \"invalid user details\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserSteps.the_Admin_User_is_registered_with_the_bank()"
});
formatter.result({
  "duration": 74049,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.has_access_for_adding_new_User()"
});
formatter.result({
  "duration": 44782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jonathan",
      "offset": 51
    },
    {
      "val": "null",
      "offset": 75
    },
    {
      "val": "HR",
      "offset": 100
    }
  ],
  "location": "AddUserSteps.the_Admin_User_provides_details_like_firstname_as_lastname_as_and_department_as(String,String,String)"
});
formatter.result({
  "duration": 29629329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid user details",
      "offset": 18
    }
  ],
  "location": "AddUserSteps.an_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 1622037,
  "status": "passed"
});
});