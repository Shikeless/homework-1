import React, { useState, useReducer } from "react";
import { declareInterface } from "@babel/types";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/
const validData = {
    email: 'test@email.com',
    password: 'supersafepassword'
}

const initialState = {
    email: '',
    password: '',
    message: null
}

function reducer(state, {type, payload}) {
    switch (type) {
        case 'email':
            return {...state, email: payload};
        case 'password':
            return {...state, password: payload};
        case 'message':
            return {...state, message: payload};
        default:
            throw new Error();
    }
}

export const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { message, email, password } = state;
    const handleChange = ({target: { name, value } }) => {
        dispatch({type: name, payload: value});
    }

    const handleClick = e => {
        e.preventDefault();
        const { email: validEmail, password: validPassword } = validData;

        if ( email === validEmail && password === validPassword ) {
            dispatch({type: 'message', payload: 'Вы вошли'})
        } 
    }

    return (
        <>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            data-testid='email-input'
          />
          <input
            type="text"
            name="password"
            onChange={handleChange}
            data-testid='password-input'
          />
          <button
            type="button"
            onClick={handleClick}
            data-testid="submit"
          >
            Submit
          </button>

          <div data-testid="success-message">{message}</div>
        </>
        
            
    )
};
