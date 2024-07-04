import { type ReactNode } from "react";
import { Outlet } from "react-router-dom";

type ILayout = {
  headerSlot?: ReactNode;
};

const Layout = (props: ILayout) => {
  return (
    <div>
      {props.headerSlot}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
