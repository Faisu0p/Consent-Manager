import { Search, Bell, User, Rocket } from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-component">
      <div className="header-component-logo">
        <Rocket size={32} className="header-component-logo-icon" />
        <span className="header-component-app-name">Consent Manager</span>
      </div>
      <div className="header-component-search">
        <Search size={24} />
      </div>
      <div className="header-component-icons">
        <Bell size={24} />
        <User size={24} />
      </div>
    </header>
  );
};

export default Header;
