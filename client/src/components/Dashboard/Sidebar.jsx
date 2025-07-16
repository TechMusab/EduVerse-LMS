import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdQuestionAnswer } from "react-icons/md";
import { FaUser, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import { logout } from "../../redux/Slices/authSlice";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const studentNavItems = [
    {
      path: "/dashboard",
      icon: <AiFillDashboard size={18} className="lg:w-5 lg:h-5" />,
      label: "Dashboard",
      active: isActive('/dashboard')
    },
    {
      path: "/courses",
      icon: <BiBookOpen size={18} className="lg:w-5 lg:h-5" />,
      label: "My Courses",
      active: false
    },
    {
      path: "/profile",
      icon: <FaUser size={18} className="lg:w-5 lg:h-5" />,
      label: "Profile",
      active: isActive('/profile')
    }
  ];

  const instructorNavItems = [
    {
      path: "/dashboard",
      icon: <AiFillDashboard size={18} className="lg:w-5 lg:h-5" />,
      label: "Dashboard",
      active: isActive('/dashboard')
    },
    {
      path: "/courses",
      icon: <BiBookOpen size={18} className="lg:w-5 lg:h-5" />,
      label: "My Courses",
      active: false
    },
    {
      path: "/students",
      icon: <FaUsers size={18} className="lg:w-5 lg:h-5" />,
      label: "Students",
      active: false
    },
    {
      path: "/profile",
      icon: <FaUser size={18} className="lg:w-5 lg:h-5" />,
      label: "Profile",
      active: isActive('/profile')
    }
  ];

  const navItems = user?.role === "instructor" ? instructorNavItems : studentNavItems;

  return (
    <>
      <section className="hidden lg:flex flex-col justify-between h-[87vh] p-4 lg:p-6 bg-surface shadow-xl w-64 lg:w-72 my-2 mr-2 lg:mr-4 rounded-xl glass-effect">
        {/* User Info */}
        <div className="mb-6">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {user?.username?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-text text-sm truncate">
                {user?.username || "User"}
              </p>
              <p className="text-muted text-xs capitalize">
                {user?.role || "Student"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-2 flex-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 lg:gap-4 p-3 rounded-lg transition-all duration-300 ${
                item.active
                  ? 'gradient-primary text-white shadow-glow' 
                  : 'text-text hover:text-primary-500 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <p className="font-medium text-sm lg:text-base">{item.label}</p>
            </Link>
          ))}
          
          {/* Additional Menu Items */}
          <div className="flex items-center gap-3 lg:gap-4 p-3 rounded-lg text-text-light hover:text-primary-500 hover:bg-gray-50 transition-all duration-300 cursor-pointer">
            <MdOutlineHelp size={18} className="lg:w-5 lg:h-5" />
            <p className="font-medium text-sm lg:text-base">Help</p>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-4 p-3 rounded-lg text-text-light hover:text-primary-500 hover:bg-gray-50 transition-all duration-300 cursor-pointer">
            <IoMdSettings size={18} className="lg:w-5 lg:h-5" />
            <p className="font-medium text-sm lg:text-base">Settings</p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 lg:gap-4 p-3 rounded-lg text-text-light hover:text-primary-500 hover:bg-gray-50 transition-all duration-300 cursor-pointer">
            <MdQuestionAnswer size={18} className="lg:w-5 lg:h-5" />
            <p className="font-medium text-sm lg:text-base">FAQs</p>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 lg:gap-4 p-3 rounded-lg text-text-light hover:text-error hover:bg-red-50 transition-all duration-300 w-full text-left"
          >
            <IoLogOut size={18} className="lg:w-5 lg:h-5" />
            <p className="font-medium text-sm lg:text-base">Log out</p>
          </button>
        </div>
      </section>
    </>
  );
}
