import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.png";
import { ChevronDown, Globe, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import names from "../../assets/names.png";
import draw from "../../assets/draw.png";
import wallet from "../../assets/wallet.png";
import tools from "../../assets/names.png";
import tokens from "../../assets/tokens.png";
import gear from "../../assets/gear.png";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" width={94} />
        <div className={styles.lang}>
          <Globe size={16} />
          <p>ENG</p>
          <ChevronDown size={16} />
        </div>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to={""}>
            <img src={names} alt="names" width={36} />
            Names
          </NavLink>
        </li>
        <li>
          <NavLink to={""}>
            <img src={draw} alt="draw" width={36} />
            Names
          </NavLink>
        </li>
        <li>
          <NavLink to={""}>
            <img src={wallet} alt="wallet" width={36} />
            Wallet
          </NavLink>
        </li>
        <li>
          <NavLink to={""}>
            <img src={tools} alt="tools" width={36} />
            Tools
          </NavLink>
        </li>
        <li>
          <NavLink to={""}>
            <img src={tokens} alt="tokens" width={36} />
            Tokens
          </NavLink>
        </li>
        <li>
          <NavLink to={""}>
            <img src={gear} alt="gear" width={36} />
            Settings
          </NavLink>
        </li>
      </ul>
      <div className={styles.footer}>
        <div className={styles.themeToggle}>
          <Moon size={20} />
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
          <Sun size={20} />
        </div>
        <p>
          © 2024 <br /> Dash Evo Tool
        </p>
        <small>
          Design by <br /> Pshennic.dev
        </small>
      </div>
    </aside>
  );
};

export default Sidebar;
