import axios from 'axios';
import { showAlert } from './alerts';

export async function doLogin(email, password) {
    try {
        const response = await axios({
            method: 'POST',
            url: '/api/v1/users/login',
            data: {
                email,
                password
            }
        });

        if (response.data.status === 'success') {
            showAlert('success', 'Logged in successfully');
            window.setTimeout(() => {
                location.assign('/');
            })
        }
    }
    catch (err) {
        showAlert('error', err.response.data.message);
    }
}

export const doLogout = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: '/api/v1/users/logout'
        });

        if (res.data.status == 'success')
            location.reload(true);
    } catch (err) {
        showAlert('error', 'Error logging out! Try again');
    }
}