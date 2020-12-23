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
    title: "All Products",
    path: "/admin/product",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "All Orders",
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
    title: "Show Employees",
    path: "/admin/employee",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
