import React from 'react';
import bond from './assets/bond_approve.jpg';

const Error = ({error}) => <h1>{error}</h1>
const Image = () => <img src={bond} alt="Bond"/>

class Form extends React.Component {
    state = { firstName: "", lastName: "", password: "", errorCode: "" };

    setDefaultState = () => this.setState({ firstName: "", lastName: "", password: ""});

    checkError = () => {
        const { firstName, lastName, password, errorCode } = this.state
        if (errorCode !== "" && errorCode !== "Allowed" && firstName === "" && lastName === "" && password === "") {
            return <Error error={this.state.errorCode}/>
        } else if (errorCode === "Allowed") {
            return <Image />
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { firstName, lastName, password } = event.target;
        for (let {name, value} of [ firstName, lastName, password ]) {
            if (value === "") {
                this.setState({ 
                    errorCode: `${name} field is empty`
                },
                    this.setDefaultState
                );
                break;
            } else if ((name === 'password' &&  value !== '007') || (name === 'lastName' &&  value !== 'Bond') || (name === 'firstName' &&  value !== 'James')) {
                this.setState({ 
                    errorCode: `wrong ${name}`
                },
                    this.setDefaultState
                );
                break;
            } else {
                this.setState({ 
                    errorCode: "Allowed"
                },
                    this.setDefaultState
                )
            }
        }   
    };
  
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
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
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            className=".t-input-secondName"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            className=".t-input-password"
                            type="text"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.checkError.call()}
            </div> 
        );
    }
}

export default Form;  