import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    heading:"Admin Dashboard"
  },
  {
    title: "Home",
    path: "/admin/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Create Product",
    path: "/admin/create/product",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/admin/product",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/admin/order",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Add Employee",
    path: "/admin/addEmployee",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Employees",
    path: "/admin/employee",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/admin/history",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/admin/profile",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Write a Blog",
    path: "/admin/createBlog",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "My Blog",
    path: "/admin/getBlog",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  }
];
