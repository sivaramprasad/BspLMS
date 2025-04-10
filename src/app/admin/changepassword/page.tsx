'use client';
import React, { useEffect,useState } from 'react';
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import { FcGoogle } from 'react-icons/fc';
import Checkbox from 'components/checkbox';
// const oldpassword = localStorage.getItem('password');
// const userid = localStorage.getItem('userId');
// const email = localStorage.getItem('email');

  

function SignInDefault() {
  const [oldpassword, setPassword] = useState<string | null>(null);
  const [userid, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const [inputOldPassword, setInputOldPassword] = useState('');
  const [inputNewPassword, setInputNewPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Only runs on the client-side
    const storedPassword = localStorage.getItem('password');
    const storedUserId = localStorage.getItem('userId');
    const storedEmail = localStorage.getItem('email');

    setPassword(storedPassword);
    setUserId(storedUserId);
    setEmail(storedEmail);
  }, []);  // The empty array ensures this runs only once after component mounts

  // Handler for "Old Password" input field change
  const handleOldPasswordChange = (e) => {
    const value = e.target.value;
    setInputOldPassword(value);

    // Check if the entered old password matches the stored one
    if (value !== oldpassword) {
      setOldPasswordError('Old password does not match.');
    } else {
      setOldPasswordError('');
    }
  };

  // Handler for "New Password" input field change
  const handleNewPasswordChange = (e) => {
    setInputNewPassword(e.target.value);
    setNewPasswordError('');
  };

  // Handler for "Confirm Password" input field change
  const handleConfirmPasswordChange = (e) => {
    setInputConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let isValid = true;
    setFormError('');
    setSuccessMessage('');

    // Check if the fields are empty
    if (!inputOldPassword) {
      setOldPasswordError('Old password is required.');
      isValid = false;
    }
    if (!inputNewPassword) {
      setNewPasswordError('New password is required.');
      isValid = false;
    }
    if (!inputConfirmPassword) {
      setConfirmPasswordError('Confirm password is required.');
      isValid = false;
    }

    // Check if old password matches
    if (inputOldPassword !== oldpassword) {
      setOldPasswordError('Old password does not match.');
      isValid = false;
    }

    // Check if new password matches confirm password
    if (inputNewPassword && inputConfirmPassword && inputNewPassword !== inputConfirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    // If form is valid, proceed with API call
    if (isValid) {
      try {
        const response = await fetch('https://www.backstagepass.co.in/reactapi/changepassword.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            old_password: inputOldPassword,
            new_password: inputNewPassword,
            confirm_password: inputConfirmPassword,
            userid:userid,
            email:email

          }),
        });

        const result = await response.json();
console.log(result.status);
        // Handle the response from the PHP backend
        if (result.status === '200') {
          setSuccessMessage('Password changed successfully!');
          localStorage.removeItem('password');  
          localStorage.removeItem('userId');  
          localStorage.removeItem('username');  
          localStorage.removeItem('email');
          localStorage.removeItem('enrolledcourses');

          // Redirect to sign-in page after successful password change
          window.location.replace('/auth/sign-in'); 
        } else {
          setFormError(result.message.join('\n'));
        }
      } catch (error) {
        setFormError('An error occurred while changing the password.');
      }
    } else {
      setFormError('Please fill all fields correctly.');
    }
  };

  return (
    <>
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Change Password
        </h3>
        <p className="mb-9 ml-1 text-base text-gray-600">Enter your password!!</p>

        {/* Old Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Old Password*"
          placeholder="Old Password"
          id="old-password"
          type="password"
          value={inputOldPassword}
          onChange={handleOldPasswordChange}
          required
        />
        {oldPasswordError && <p className="text-red-500 text-sm">{oldPasswordError}</p>}

        {/* New Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="New Password*"
          placeholder="New Password"
          id="new-password"
          type="password"
          value={inputNewPassword}
          onChange={handleNewPasswordChange}
          required
        />
        {newPasswordError && <p className="text-red-500 text-sm">{newPasswordError}</p>}

        {/* Confirm Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Confirm Password*"
          placeholder="Confirm Password"
          id="confirm-password"
          type="password"
          value={inputConfirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{ color: '#fff' }}
          className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Change Password
        </button>

        {/* General form error */}
        {formError && <p className="text-red-500 text-sm mt-2">{formError}</p>}

        {/* Success message */}
        {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
      </div>
    </>
  );
}

export default SignInDefault;