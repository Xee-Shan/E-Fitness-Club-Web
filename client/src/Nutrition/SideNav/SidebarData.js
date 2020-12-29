import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/nutritionist/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add Diet Plans",
    path: "/nutritionist/create/dietPlan",
    icon: <FaIcons.FaPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "All Diet Plans",
    path: "/nutritionist/dietPlan",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Add Recipies",
    path: "/nutritionist/create/recipe",
    icon: <FaIcons.FaPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "All Recipies",
    path: "/nutritionist/recipe",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Add Blog",
    path: "/nutritionist/createblog",
    icon: <FaIcons.FaPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "All Blogs",
    path: "/nutritionist/getblog",
    icon: <FaIcons.FaTable />,
    cName: "nav-text",
  },
];
