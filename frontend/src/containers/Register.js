import React, {useState} from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

const Register = ({ register }) => {
    const [formData,setFormData] = useState({
        username: '',
        password: '',
        re_password: ''
    });

    const { username, password,re_password } = formData;

    const onChange = e => setFormData({...formData,[e.target.name] : e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            register(username,password,re_password)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Username </label>
                    <input type="text" name="uname" id="unameValue" required />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" name="pass" id="passValue" required />
                </div>
                <div>
                    <label>Re-Password </label>
                    <input type="password" name="pass" id="passValue" required />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);