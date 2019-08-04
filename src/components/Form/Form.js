import React from 'react';
import bond from './assets/bond_approve.jpg';

const Error = (props) => <h1>{props.error}</h1>
const Image = () => <img src={bond} alt="Bond"/>

class Form extends React.Component {
    state = { firstName: "", lastName: "", password: "", errorCode: "" };

    emptyInputs = () => this.setState({ firstName: "", lastName: "", password: ""});

    checkForErros = () => {
        if (this.state.errorCode !== "" && this.state.errorCode !== "Allowed" && this.state.firstName === "" && this.state.lastName === "" && this.state.password === "") {
            return <Error error={this.state.errorCode}/>
        } else if (this.state.errorCode === "Allowed") {
            return <Image />
        }
    }
  
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.firstName === "") {
            this.setState({ 
                errorCode: "First Name field is empty" 
            },
                this.emptyInputs
            );
        } else if (this.state.lastName === "") { 
            this.setState({ 
                errorCode: "Second Name field is empty" 
            },
                this.emptyInputs
            );
        } else if (this.state.password === "") { 
            this.setState({ 
                errorCode: "Password field is empty" 
            },
                this.emptyInputs
            );
        } else if (this.state.firstName !== "James") { 
            this.setState({ 
                errorCode: "Wrond First Name" 
            },
                this.emptyInputs
            );
        } else if (this.state.lastName !== "Bond") { 
            this.setState({ 
                errorCode: "Wrond Second Name" 
            },
                this.emptyInputs
            );
        } else if (this.state.password !== "007") { 
            this.setState({ 
                errorCode: "Wrond Password" 
            },
                this.emptyInputs
            );
        } else {
            this.setState(
                { errorCode: "Allowed" }
            );
        }
    };
  
    handleFirstNameChange = event => {
        this.setState({ firstName: event.target.value });
    };
  
    handleLastNameChange = event => {
        this.setState({ lastName: event.target.value });
    };

    handlePassword = event => {
        this.setState({ password: event.target.value });
    };
  
    render() {
        const { firstName, lastName, password } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input
                            className=".t-input-firstName"
                            type="text"
                            value={firstName}
                            onChange={this.handleFirstNameChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            className=".t-input-secondName"
                            type="text"
                            value={lastName}
                            onChange={this.handleLastNameChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            className=".t-input-password"
                            type="text"
                            value={password}
                            onChange={this.handlePassword}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.checkForErros.call()}
            </div> 
        );
    }
}

export default Form;  