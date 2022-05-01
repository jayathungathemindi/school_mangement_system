import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Add-Student",
    path: "/addStudent",
    role: "Admin",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add-Teacher",
    path: "/addTeacher",
    role: "Admin",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Feedbacks",
    path: "/Products",
    role: "Admin",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Add-Notificaton",
    path: "/team",
    role: "Admin",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Teacher-List",
    path: "/teacherList",
    role: "Admin",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Student-List",
    path: "/studentList",
    role: "Admin",
    icon: <AiIcons.AiFillHome />,
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
