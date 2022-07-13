import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotificationLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile, userProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

const handleClick = (id) => {
  console.log(id);
};

const NavButton = ({ icon, title, color, dotColor, onClick }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        onClick={onClick}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    if (screenSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize, setActiveMenu, setScreenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-2 relative">
      <NavButton
        title="Menu"
        onClick={() => setActiveMenu((prev) => !prev)}
        icon={<AiOutlineMenu />}
        color="blue"
      />

      <div className="flex items-center">
        <NavButton
          title="Cart"
          onClick={() => {}}
          icon={<FiShoppingCart />}
          color="blue"
          dotColor="#fff"
        />
        <NavButton
          title="Chat"
          onClick={() => {}}
          icon={<BsChatLeft />}
          color="blue"
          dotColor="#03c9d7"
        />
        <NavButton
          title="Notification"
          onClick={() => {}}
          icon={<RiNotificationLine />}
          color="blue"
          dotColor="#03c9d7"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userprofile")}
          >
            <img src={avatar} className="w-8 h-8 rounded-full" alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Basit
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
