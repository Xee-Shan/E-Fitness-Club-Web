import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
//import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";

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
    icon: <FaIcons.FaProductHunt />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/admin/product",
    icon: <GiIcons.GiCash />,
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
    icon: <GrIcons.GrUserWorker />,
    cName: "nav-text",
  },
  {
    title: "Employees",
    path: "/admin/employee",
    icon: <FcIcons.FcManager />,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/admin/history",
    icon: <FaIcons.FaHistory />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/admin/profile",
    icon: <ImIcons.ImProfile />,
    cName: "nav-text",
  },
  {
    title: "Write a Blog",
    path: "/admin/createBlog",
    icon: <ImIcons.ImBlogger />,
    cName: "nav-text",
  },
  {
    title: "My Blog",
    path: "/admin/getBlog",
    icon: <ImIcons.ImBlog  />,
    cName: "nav-text",
  }
];
