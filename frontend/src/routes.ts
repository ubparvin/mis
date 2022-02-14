import {
  ViewGridIcon,
  ClockIcon,
  CreditCardIcon,
  CogIcon,
  ClipboardCheckIcon,
  DocumentReportIcon,
  SpeakerphoneIcon,
  UsersIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Announcents from "pages/Announcements/Announcements";
import Attendance from "pages/Attendance/Attendance";
import Dashboard from "pages/Dashboard/Dashboard";
import Evaluations from "pages/Evaluations/Evaluations";
import ForgotPassword from "pages/ForgotPassword/ForgotPassword";
import Payroll from "pages/Payroll/Payroll";
import EditProfile from "pages/Profile/EditProfile";
import Profile from "pages/Profile/Profile";
import Reports from "pages/Reports/Reports";
import Settings from "pages/Settings/Settings";
import Signin from "pages/Signin/Signin";
import AddUser from "pages/Users/AddUser";
import EditUser from "pages/Users/EditUser";
import Users from "pages/Users/Users";
import ViewUser from "pages/Users/ViewUser";
import ResetPassword from "pages/ResetPassword/ResetPassword";
import { SVGProps } from "react";

export interface Route {
  name: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  path: string;
  access?: string[];
  Component: () => JSX.Element;
  isProtected: boolean;
  children?: Array<Route>;
}

export const routes: Array<Route> = [
  {
    name: "signin",
    path: "/",
    Component: Signin,
    isProtected: false,
  },
  {
    name: "forgot-password",
    path: "forgot-password",
    Component: ForgotPassword,
    isProtected: false,
  },
  {
    name: "reset-password",
    path: "reset-password/:token",
    Component: ResetPassword,
    isProtected: false,
  },
  {
    name: "dashboard",
    Icon: ViewGridIcon,
    path: "dashboard",
    access: ["SA", "CA", "EM"],
    Component: Dashboard,
    isProtected: true,
  },
  {
    name: "users",
    Icon: UsersIcon,
    path: "users",
    access: ["SA", "CA"],
    Component: Users,
    isProtected: true,
    children: [
      {
        name: "new",
        path: "users/new",
        Component: AddUser,
        isProtected: true,
      },
      {
        name: "view",
        path: "users/view",
        Component: ViewUser,
        isProtected: true,
      },
      {
        name: "edit",
        path: "users/edit",
        Component: EditUser,
        isProtected: true,
      },
    ],
  },
  {
    name: "profile",
    Icon: UserIcon,
    path: "profile",
    access: ["EM"],
    Component: Profile,
    isProtected: true,
    children: [
      {
        name: "edit",
        path: "profile/edit",
        Component: EditProfile,
        isProtected: true,
      },
    ],
  },
  {
    name: "attendance",
    Icon: ClockIcon,
    path: "attendance",
    access: ["SA", "CA", "EM"],
    Component: Attendance,
    isProtected: true,
  },
  {
    name: "payroll",
    Icon: CreditCardIcon,
    path: "payroll",
    access: ["SA", "CA", "EM"],
    Component: Payroll,
    isProtected: true,
  },
  {
    name: "announcements",
    Icon: SpeakerphoneIcon,
    path: "announcements",
    access: ["SA", "CA"],
    Component: Announcents,
    isProtected: true,
  },
  {
    name: "Settings",
    Icon: CogIcon,
    path: "settings",
    access: ["SA", "CA", "EM"],
    Component: Settings,
    isProtected: true,
  },
  {
    name: "Evaluations",
    Icon: ClipboardCheckIcon,
    path: "evaluations",
    access: ["SA", "CA", "EM"],
    Component: Evaluations,
    isProtected: true,
  },
  {
    name: "Reports",
    Icon: DocumentReportIcon,
    path: "reports",
    access: ["SA", "CA", "EM"],
    Component: Reports,
    isProtected: true,
  },
];
