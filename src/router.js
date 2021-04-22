import { createRouter, createWebHistory } from "vue-router";

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import HomePage from "./pages/HomePage";
import Profiles from "./pages/profiles";
import ProfileImg from "./pages/profiles/ProfileImg";
import SettingProfile from './pages/profiles/SettingProfile';
import ChangePassword from './pages/profiles/ChangePassword';
import NotificationForm from './pages/profiles/NotificationForm';

const routes = [
  {
    path: "/",
    components: {
      header: AppHeader,
      default: HomePage,
      footer: AppFooter,
    },
  },
  {
    path: "/profile",
    component: Profiles,
    components: {
      header: AppHeader,
      default: Profiles,
      footer: AppFooter,
    },
    children: [
      {
        path: "",
        component: SettingProfile,
        name : 'profile',
      },
      {
        path: "img",
        component: ProfileImg,
        name : 'img',
      },
      {
        path: "password",
        component: ChangePassword ,
        name : 'password',
      },
      {
        path: "notification",
        component: NotificationForm ,
        name : 'notification',
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

export default router;
