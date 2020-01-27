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
  "name": "a User is created",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "a message saying \"User successfully created\" is provided",
  "keyword": "And "
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
        "SS5",
        "SS5",
        "finance"
      ],
      "line": 19,
      "id": "add-a-new-user;add-a-user-with-valid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 358895589,
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
  "name": "the Admin User provides details like firstname as \"SS5\", lastname as \"SS5\" and department as \"finance\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "a User is created",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "a message saying \"User successfully created\" is provided",
  "keyword": "And "
});
formatter.match({
  "location": "AddUserSteps.the_Admin_User_is_registered_with_the_bank()"
});
formatter.result({
  "duration": 104174314,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.has_access_for_adding_new_User()"
});
formatter.result({
  "duration": 65587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SS5",
      "offset": 51
    },
    {
      "val": "SS5",
      "offset": 70
    },
    {
      "val": "finance",
      "offset": 94
    }
  ],
  "location": "AddUserSteps.the_Admin_User_provides_details_like_firstname_as_lastname_as_and_department_as(String,String,String)"
});
formatter.result({
  "duration": 1561838601,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.a_User_is_created()"
});
formatter.result({
  "duration": 26716724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User successfully created",
      "offset": 18
    }
  ],
  "location": "AddUserSteps.a_message_saying_is_provided(String)"
});
formatter.result({
  "duration": 617785,
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
  "name": "an error message saying \"Missing details\" is provided",
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
        "SS5",
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
  "duration": 238721,
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
  "name": "the Admin User provides details like firstname as \"SS5\", lastname as \"null\" and department as \"HR\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "an error message saying \"Missing details\" is provided",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserSteps.the_Admin_User_is_registered_with_the_bank()"
});
formatter.result({
  "duration": 51835,
  "status": "passed"
});
formatter.match({
  "location": "AddUserSteps.has_access_for_adding_new_User()"
});
formatter.result({
  "duration": 32441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SS5",
      "offset": 51
    },
    {
      "val": "null",
      "offset": 70
    },
    {
      "val": "HR",
      "offset": 95
    }
  ],
  "location": "AddUserSteps.the_Admin_User_provides_details_like_firstname_as_lastname_as_and_department_as(String,String,String)"
});
formatter.result({
  "duration": 24732549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Missing details",
      "offset": 25
    }
  ],
  "location": "AddUserSteps.an_error_message_saying_is_provided(String)"
});
formatter.result({
  "duration": 303604,
  "status": "passed"
});
});