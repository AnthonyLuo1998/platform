import { Outlet, useLocation } from "react-router-dom";

import { LayoutWrap } from "./style";

import Aside from "./aside";
import Header from "./header";

function Layout() {
  const location = useLocation();

  let isProject = location.pathname === "/project";

  return (
    <LayoutWrap>
      <div className="layout_header_warp">
        <Header />
      </div>

      <div className="layout_center_warp">
        {isProject ? null : (
          <div className="layout_aside_warp">
            <Aside />
          </div>
        )}

        <div className="layout_content_warp">
          <Outlet />
        </div>
      </div>
    </LayoutWrap>
  );
}

export default Layout;
