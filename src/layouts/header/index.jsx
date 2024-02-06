import { HeaderWrap } from "./style";
import MemberPopover from "./memberPopover";
import ProjectPopover from "./projectPopover";
function Header() {
  return (
    <HeaderWrap>
      <div className="header-brand-warp"></div>
      <div className="header-project-warp">
        <ProjectPopover />
      </div>
      <div className="header-member-warp">
        <MemberPopover />
      </div>
    </HeaderWrap>
  );
}

export default Header;
