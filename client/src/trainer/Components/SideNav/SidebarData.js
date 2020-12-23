import React from "react";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/trainer/dashboard",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "Add Programs",
    path: "/trainer/create/program",
    icon: <FaIcons.FaPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "All Programs",
    path: "/trainer/program",
    icon: <FaIcons.FaTable />,
    cName: "nav-text",
  },
  {
    title: "All Trainees",
    path: "/trainer/trainee",
    icon: <FaIcons.FaList />,
    cName: "nav-text",
  },
  {
    title: "Add Blog",
    path: "/trainer/createblog",
    icon: <FaIcons.FaPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "Upload Video",
    path: "/trainer/uploadVideo",
    icon: <FaIcons.FaPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "All Blogs",
    path: "/trainer/getblog",
    icon: <FaIcons.FaTable />,
    cName: "nav-text",
  },
];
