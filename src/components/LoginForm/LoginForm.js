import React from 'react';
import { withAuth } from '../../context/Auth'
import cx from 'classnames';
import classes from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';
// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
const fields = [
    {
      id: 'email',
      label: 'Почта',
      type: 'text'
    },
    {
      id: 'password',
      label: 'Пароль',
      type: 'password'
    }
  ]
  
class LoginForm extends React.Component {
    state = {
        values: {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { values } = this.state;
        this.setState({
            values: { ...values, [event.target.name]: event.target.value }
        });
    };

    handleSubmit = () => {
        const {
          values: { email, password }
        } = this.state;
        const { authorize } = this.props;
    
        authorize(email, password);
      };

    render () {
        const { values } = this.state;
        const { authError, isAuthorized } = this.props;
        if (isAuthorized) {
            return (<Redirect to="/app"/>)
        } else {
            return ( 
                <React.Fragment >
                    <form className={cx(classes.form)}>
                        {fields.map(({ id, label, type }) => (
                            <React.Fragment key={id}> 
                                <label className={cx(classes.labelText)} htmlFor={id}>
                                    <span>{label}</span>
                                </label>
                                <input
                                    className={cx(classes.input)}
                                    id={id}
                                    type={type}
                                    name={id}
                                    value={values[id]}
                                    onChange={this.handleChange}
                                />
                            </React.Fragment>
                        ))}
                    </form>

                    {authError !== '' && (
                        <p className={cx(classes.error)}>{authError}</p>
                    )}
            
                    <button onClick={this.handleSubmit} className={cx(classes.button)}>Войти</button>
                </React.Fragment>
            )
        }
    }
}

export default withAuth(LoginForm)