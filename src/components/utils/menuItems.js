import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaUserTie,
    FaRegEdit
  } from "react-icons/fa";
  

const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/franchise",
      name: "Franchise",
      icon: <FaRegChartBar />,
    },
    {
      path: "/agents",
      name: "Agents",
      icon: <FaUserTie />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
    {
      path: "/vendorList",
      name: "Vender List",
      icon: <FaThList />,
    },
    {
      path: "/set-percentage",
      name: "Set Percentage",
      icon: <FaRegEdit />,
    },
    {
      path: "/admin/consultant",
      name: "All Consultant",
      icon: <FaRegEdit />,
    },
  ];

export default menuItem