import React from 'react';
import './Form.css';
import './Validate.js'

class Form extends React.Component {
    constructor() {
        super();
        this.onType = this.keyUpHandler.bind(this);
    }

    keyUpHandler(refName, e) {
        console.log(refName.target.name);
        this.validateInput(refName.target.name);
        var regex = /^[a-z-A-Z ]*$/;
        if (!regex.test(refName.target.value)) {
            var error_field = refName.target.name + "_error";
            console.log(error_field);
            this.setState({errorDisplay: "block"});
        }         
        //1) get e.Name
        //2) Do Switch Case 
        //3) Send Value to validator
        //4) IF true set state as rtue
        //5) If False then disable button and throw error
    }

    validateInput(id) {
        switch(id) {
            case "first_name":
                console.log("Yes first name");
                break;
            case "last_name":
                console.log("Yes last name");
                break;
            case "email":
                console.log("Yes email");
                break;
            case "mobile":
                console.log("Yes mobile");
                break;
            case "address":
                console.log("Yes address");
                break;
            case "state":
                console.log("Yes state");
                break;
            default:
                console.log("default value");
                break;
        }   
    }

    render() {
    return (
            <form>
                <label for="first_name"> First Name:</label>
                <input type="text" name="first_name" onKeyUp={this.onType} /><br />
                <div class="error_message" id="first_name_error"></div>

                <label for="last_name">Last Name:</label>
                <input type="text" name="last_name" onKeyUp={this.onType} /><br />
                <div class="error_message" id="last_name_error"></div>
                
                <label for="email">Email:</label>
                <input type="text" name="email" onKeyUp={this.onType}/><br />
                <div class="error_message" id="email_error"></div>
                
                <label for="phone">Mobile:</label>
                <input type="text" name="mobile" onKeyUp={this.onType}/><br />
                <div class="error_message" id="mobile_error"></div>

                <label for="address">Address:</label>
                <input type="text" name="address" onKeyUp={this.onType} /><br />
                <div class="error_message" id="address_error"></div>
                
                <label for="state">State:</label>
                <input type="text" name="state" onKeyUp={this.onType} /><br />  
                <div class="error_message" id="state_error"></div>  

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
