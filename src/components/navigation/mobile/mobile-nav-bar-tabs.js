import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";
import { useAuth0 } from "@auth0/auth0-react";

export const MobileNavBarTabs = ({ handleClick }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={handleClick}
      />
      <MobileNavBarTab
        path="/public"
        label="Public"
        handleClick={handleClick}
      />
      <MobileNavBarTab
        path="/protected"
        label="Protected"
        handleClick={handleClick}
      />
      <MobileNavBarTab path="/admin" label="Admin" handleClick={handleClick} />
      {isAuthenticated && (
        <>
          <MobileNavBarTab
            path="/protected"
            label="Protected"
            handleClick={handleClick}
          />
          <MobileNavBarTab
            path="/admin"
            label="Admin"
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  );
};
