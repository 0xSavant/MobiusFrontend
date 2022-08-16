import React, { FunctionComponent } from "react";
import SideNav from "./SideNav";

interface Props {
  children: React.ReactNode | React.ReactChild[];
}

const DashboardLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      <div className="px-5 py-3">{children}</div>
    </div>
  );
};

export default DashboardLayout;
