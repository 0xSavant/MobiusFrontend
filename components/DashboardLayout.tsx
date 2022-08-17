import React, { FunctionComponent } from "react";
import SideNav from "./SideNav";

interface Props {
  children: React.ReactNode | React.ReactChild[];
}

const DashboardLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      <div className="w-20"></div>
      <div
        style={{
          width: `calc(100vw - 5rem)`,
        }}
        className="px-5 py-3"
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
