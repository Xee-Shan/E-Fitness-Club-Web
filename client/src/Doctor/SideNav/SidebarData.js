import React from "react";
//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

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
    icon: <BsIcons.BsFillChatDotsFill />,
    cName: "nav-text",
  },
  {
    title: "Write a Blog",
    path: "/doctor/createBlog",
    icon: <ImIcons.ImBlog />,
    cName: "nav-text",
  },{
    title: "My Blogs",
    path: "/doctor/getBlog",
    icon: <ImIcons.ImBlogger />,
    cName: "nav-text",
  },{
    title: "Upload Meditation",
    path: "/doctor/upload",
    icon: <FaIcons.FaFileAudio />,
    cName: "nav-text",
  },{
    title: "My Meditation",
    path: "/doctor/meditation",
    icon: <MdIcons.MdAudiotrack />,
    cName: "nav-text",
  },{
    title: "My Profile",
    path: "/doctor/profile",
    icon: <ImIcons.ImProfile />,
    cName: "nav-text",
  }
];
