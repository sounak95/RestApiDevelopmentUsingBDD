package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * User will be created
 */
@ApiModel(description = "User will be created")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-01-20T08:14:21.754Z")

public class CreatedUser   {
  @JsonProperty("id")
  private Integer id = null;

  @JsonProperty("firstName")
  private String firstName = null;

  @JsonProperty("lastName")
  private String lastName = null;

  @JsonProperty("department")
  private String department = null;
  
//  @JsonProperty("message")
//  private String message = null;

  public CreatedUser id(Integer id) {
    this.id = id;
    return this;
  }

  /**
   * User id
   * @return id
  **/
  @ApiModelProperty(value = "User id")


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public CreatedUser firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * User First Name
   * @return firstName
  **/
  @ApiModelProperty(value = "User First Name")


  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public CreatedUser lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * User Last Name
   * @return lastName
  **/
  @ApiModelProperty(value = "User Last Name")


  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public CreatedUser department(String department) {
    this.department = department;
    return this;
  }

  /**
   * User belongs to which department
   * @return department
  **/
  @ApiModelProperty(value = "User belongs to which department")


  public String getDepartment() {
    return department;
  }

  public void setDepartment(String department) {
    this.department = department;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreatedUser createdUser = (CreatedUser) o;
    return Objects.equals(this.id, createdUser.id) &&
        Objects.equals(this.firstName, createdUser.firstName) &&
        Objects.equals(this.lastName, createdUser.lastName) &&
        Objects.equals(this.department, createdUser.department);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, firstName, lastName, department);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreatedUser {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    department: ").append(toIndentedString(department)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

