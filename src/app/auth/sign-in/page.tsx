'use client';

import React, { useState } from "react";
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import Checkbox from 'components/checkbox';

const SignInDefault = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

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
        // Save to localStorage
        localStorage.setItem('userId', data.userid);
        localStorage.setItem('username', data.username);
        localStorage.setItem('enrolledcourses', data.enrolled);
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);

        // ✅ Redirect with trailing slash for GoDaddy
        setTimeout(() => {
          const userId = localStorage.getItem('userId');
          const username = localStorage.getItem('username');

          if (userId && username) {
            // Use trailing slash!
            window.location.href = '/admin/nft-marketplace/';
          } else {
            setError("Something went wrong. Please try again.");
          }
        }, 100);
      } else {
        setError(data.message || "Invalid credentials");
      }

    } catch (err) {
      console.error('Login error:', err);
      setError("An error occurred while trying to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <Default
        maincard={
          <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
            <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] loginColor">
              <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">Sign In</h3>
              <p className="mb-9 ml-1 text-base text-gray-600">Enter your email and password to sign in!</p>

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

              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

              <div className="mb-4 flex items-center justify-between px-2">
                <div className="mt-2 flex items-center">
                  <Checkbox />
                  <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">Keep me logged In</p>
                </div>
                <a
                  className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/auth/forgot-pwd/';
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              <button
                style={{ color: "#fff" }}
                className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </div>
        }
      />
    </form>
  );
};

export default SignInDefault;
