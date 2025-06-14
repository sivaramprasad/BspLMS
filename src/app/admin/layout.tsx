'use client';
// Layout components

import { usePathname } from 'next/navigation';
import  { useContext, useState,useEffect } from 'react';
import routes from 'routes';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from 'utils/navigation';
import { HiMenuAlt1 } from "react-icons/hi";

import React from 'react';
import { Portal } from '@chakra-ui/portal';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import Footer from 'components/footer/Footer';

export default function Admin({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState({
      userId: '',
      username: '',
    });
  
    useEffect(() => {
      // Retrieve user details from localStorage
      const userId = localStorage.getItem('userId');
      const username = localStorage.getItem('username');
      console.log('userId:', userId, 'username:', username); // Add this
      
      if (userId && username) {
        setUserDetails({ userId, username });
      } else {
        // Redirect back to login page if no user details are found
        window.location.replace('/auth/sign-in');
      }
    }, []);

  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  return (
    <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" />
      <div onClick={() => setOpen(true)} className='opentheleftmenu'><HiMenuAlt1 /></div>
      {/* Navbar & Main Content */}
      <div className="h-full w-full font-dm dark:bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-2.5  flex-none transition-all dark:bg-navy-900 
              md:pr-2 xl:ml-[323px]`}
        >
          {/* Routes */}
          <div>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
              userDetails={userDetails}
            />
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
