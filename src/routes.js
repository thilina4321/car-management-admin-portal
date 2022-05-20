
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserList";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import FavouriteCars from "./views/FavouriteCars";
import Login from "./views/Login";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/booked",
    name: "Most Booked",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/favourite",
    name: "Favourite Cars",
    icon: "nc-icon nc-notes",
    component: FavouriteCars,
    layout: "/admin",
  },
  {
    path: "/loyal-customers",
    name: "Loyal Customers",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  {
    path: "/emails",
    name: "Emails",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
