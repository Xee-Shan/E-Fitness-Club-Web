import React from "react";
//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import * as IoIcons from "react-icons/io";


export const SidebarData = [
  {
    heading:"Doctor/Physiatrist Dashboard"
  },
  {
    title: "Home",
    path: "/doctor/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Chat with patients",
    path: "",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Write a Blog",
    path: "/doctor/createBlog",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },{
    title: "My Blogs",
    path: "/doctor/getBlog",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },{
    title: "Upload Meditation",
    path: "/doctor/upload",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },{
    title: "My Meditation",
    path: "/doctor/meditation",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },{
    title: "My Profile",
    path: "/doctor/profile",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  }
];
