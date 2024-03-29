import { SiConsul } from "react-icons/si";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navBar flex">
      {/*Navbar One*/}
      <div className="navBarOne flex">
        {/*SiConsul*/}
        <div>
          <SiConsul className="icon" />
        </div>

        {/*Support && Languages*/}
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrateFill className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        {/*Sign in && Sign out*/}
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      {/*Navbar Two*/}
      <div className="navBarTwo flex">
        <div className="logoDiv">
          <img src={logo} className="Logo" />
        </div>

        <div className="navBarMenu">
          <ul className="menu flex">
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destinations</li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
        {/* <button className="btn flex btnTwo">Contact</button> */}

        <div className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* 
<div className="navBarTwo flex">
<div className="logoDiv">
  <img src={logo} className="Logo" />
</div>
<div className="navBarMenu">
  <ul className="menu flex">
    <li className="listItem">Home</li>
    <li className="listItem">About</li>
    <li className="listItem">Offers</li>
    <li className="listItem">Seats</li>
    <li className="listItem">Destinations</li>
  </ul>
</div>
<button className="btn flex btnOne">Contact</button>
<div className="toggleIcon">
  <CgMenuGridO />
</div>
</div> */
}
