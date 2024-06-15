
export const validateRegister = (fName, lName, email, password, cPassword) => {

    const errors = {};

    if(!fName || fName.trim()===''){
        errors.fName = 'First name is required';
    }

    if(!lName || lName.trim()===''){
        errors.lName = 'Last name is required'
    }

    if (!email || email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!cPassword) {
        errors.cPassword = 'Please confirm your password';
    } else if (password !== cPassword) {
        errors.cPassword = 'Passwords do not match';
    }

    return errors;
}
