import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import CSRFToken from '../components/CSRFToken';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(username, password);
    };

    if (isAuthenticated)
        return <Redirect to='/dashboard' />;

    return (
        <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Username </label>
                        <input type="text" name="username" id="username" required />
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);