import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons";
import { MessageOutlined } from "@ant-design/icons";
import { BellOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

export const SidebarData = [
  {
    title: "Dashboad",
    path: "/admin",
    role: "Admin",
    icon: <HomeOutlined />,
    cName: "nav-text",
  },
  {
    title: "Add-Student",
    path: "/addStudent",
    role: "Admin",
    icon: <UsergroupAddOutlined />,
    cName: "nav-text",
  },
  {
    title: "Add-Teacher",
    path: "/addTeacher",
    role: "Admin",
    icon: <UserAddOutlined />,
    cName: "nav-text",
  },
  {
    title: "Feedbacks",
    path: "/Products",
    role: "Admin",
    icon: <MessageOutlined />,
    cName: "nav-text",
  },
  {
    title: "Add-Notificaton",
    path: "/team",
    role: "Admin",
    icon: <BellOutlined />,
    cName: "nav-text",
  },
  {
    title: "Dashboad",
    path: "/teacher",
    role: "Teacher",
    icon: <HomeOutlined />,
    cName: "nav-text",
  },
  {
    title: "Dashboad",
    path: "/student",
    role: "Student",
    icon: <HomeOutlined />,
    cName: "nav-text",
  },
  {
    title: "Teacher-List",
    path: "/teacherList",
    role: "Admin",
    icon: <UserOutlined />,
    cName: "nav-text",
  },
  {
    title: "Student-List",
    path: "/studentList",
    role: "Admin",
    icon: <UserOutlined />,
    cName: "nav-text",
  },
  {
    title: "Quiz-Maker",
    path: "/addQuiz",
    role: "Teacher",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Add-file",
    path: "/fileUpload",
    role: "Teacher",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Subjects",
    path: "/support",
    role: "Student",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Add-Feedback",
    path: "/support",
    role: "Student",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },

  {
    title: "Add-Feedback",
    path: "/support",
    role: "Student",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },

  {
    title: "Enroll",
    path: "/enroll",
    role: "Student",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
