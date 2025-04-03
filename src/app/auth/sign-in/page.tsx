'use client';  // Make sure this is a client-side component

import React, { useState ,useEffect } from "react";
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import Checkbox from 'components/checkbox';
//import { useRouter } from 'next/router';  // Import useRouter for client-side navigation

const SignInDefault = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
 

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors
   
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://www.backstagepass.co.in/reactapi/student_login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in. Please try again.");
      }

      const data = await response.json();
      console.log('Response Data:', data);

      if (data.status === 200) {
        console.log("Logged in successfully", data);
       
        // Client-side redirection using router.push() after successful login
        //router.push('/admin/nft-marketplace');  // Redirect to the NFT Marketplace page
        //window.location.replace('/admin/nft-marketplace');
        //useEffect(() => {
          // Redirect without leaving a history entry
          //window.location.replace('/admin/nft-marketplace');
          localStorage.setItem('userId', data.userid);  // Store userId
          localStorage.setItem('username', data.username);  // Store username
          window.location.replace('/admin/nft-marketplace'); 
        //}, []);
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error('Error:', err);
      setError("An error occurred while trying to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <Default
        maincard={
          <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
            {/* Sign in section */}
            <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
              <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                Sign In
              </h3>
              <p className="mb-9 ml-1 text-base text-gray-600">
                Enter your email and password to sign in!
              </p>

              {/* Email */}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Email*"
                placeholder="mail@simmmple.com"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password */}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Password*"
                placeholder="Min. 8 characters"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Error Display */}
              {error && (
                <div className="text-red-500 text-sm mb-4">
                  {error}
                </div>
              )}

              {/* Checkbox */}
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="mt-2 flex items-center">
                  <Checkbox />
                  <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                    Keep me logged In
                  </p>
                </div>
                <a
                  className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                  href=" "
                >
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                style={{ color: "#fff" }}
                className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                type="submit"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </div>
        }
      />
    </form>
  );
}

export default SignInDefault;
