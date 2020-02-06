package io.swagger.api;

import io.swagger.model.AddUserRequest;
import io.swagger.model.CreatedUser;
import io.swagger.model.Error;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.*;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-01-20T08:14:21.754Z")

@Controller
public class AddAnUserApiController implements AddAnUserApi {

	private static final Logger log = LoggerFactory.getLogger(AddAnUserApiController.class);

	private final ObjectMapper objectMapper;

	private final HttpServletRequest request;

	@org.springframework.beans.factory.annotation.Autowired
	public AddAnUserApiController(ObjectMapper objectMapper, HttpServletRequest request) {
		this.objectMapper = objectMapper;
		this.request = request;
	}

	public ResponseEntity<CreatedUser> addUserRequest(@ApiParam(value = "Add User"  )  @Valid @RequestBody AddUserRequest addUserRequest)  {
		String accept = request.getHeader("Accept");
		
		if(addUserRequest.toString().contains("null"))
        	return new ResponseEntity<CreatedUser>(HttpStatus.BAD_REQUEST);
		
		if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<CreatedUser>(objectMapper.readValue("{  \"firstName\" : \"Michael\",  \"lastName\" : \"Jackson\",  \"id\" : 123,  \"department\" : \"Finance\"}", CreatedUser.class), HttpStatus.CREATED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<CreatedUser>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
		
	
		return new ResponseEntity<CreatedUser>(HttpStatus.NOT_IMPLEMENTED);
	}

}
