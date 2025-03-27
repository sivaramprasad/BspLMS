'use client';
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import { FcGoogle } from 'react-icons/fc';
import Checkbox from 'components/checkbox';

function SignInDefault() {
  return (
    <>
          {/* Sign in section */}
          <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Change Password
            </h3>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Enter your password!!
            </p>
           
           
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Old Password*"
              placeholder="Old Password"
              id="password"
              type="password"
            />

<InputField
              variant="auth"
              extra="mb-3"
              label=" New Password*"
              placeholder="New Password"
              id="password"
              type="password"
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Confirm Password*"
              placeholder="Confirm Password"
              id="password"
              type="password"
            />
            {/* Checkbox */}
            
            <button style={{color: "#fff"}} className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Change Password
            </button>
            
          </div>
        
  
    </>
  );
}

export default SignInDefault;
