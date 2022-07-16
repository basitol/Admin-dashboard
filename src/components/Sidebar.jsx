import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../context/ContextProvider";
import { links } from "../data/dummy";
import "animate.css";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 768) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-gray-400 text-md m-2";
  const inactiveLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center flex gap-3 ml-3 mt-4 font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              <span className="text-2xl font-bold">Shoppy</span>
            </Link>
            <TooltipComponent content="Close" placement="BottomCenter">
              <button
                className="text-xl rounded-full p-3 hover:bg-light-gray hidden font-bold md:block mt-4"
                onClick={() => setActiveMenu((prev) => !prev)}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      key={link.name}
                      to={`/${link.name}`}
                      onClick={handleCloseSidebar}
                      className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
