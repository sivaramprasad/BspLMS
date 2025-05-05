import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { GrResources } from "react-icons/gr";
import { BiVideoRecording } from "react-icons/bi";


const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <LuLayoutDashboard className="h-6 w-6" />,
  },
  {
    name: 'Courses Enrolled',
    layout: '/admin',
    path: 'default',
    icon: <IoBookOutline className="h-6 w-6" />,
  },
  
  {
    name: 'Clasess OverView',
    layout: '/admin',
    icon: <SiGoogleclassroom className="h-6 w-6" />,
    path: 'data-tables',
  },
  {
    name: 'Resources',
    layout: '/admin',
    path: 'profile',
    icon: <GrResources className="h-6 w-6" />,
  },
  {
    name: 'Recordings',
    layout: '/admin',
    path: 'recordings',
    icon: <BiVideoRecording className="h-6 w-6" />,
  },
  // {
  //   name: 'Change Password',
  //   layout: '/admin',
  //   path: 'changepassword',
  //   icon: <MdPerson className="h-6 w-6" />,
  // },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: 'sign-in',
  //   icon: <MdLock className="h-6 w-6" />,
  // },
];
export default routes;
