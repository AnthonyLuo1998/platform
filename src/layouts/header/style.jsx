import { styled } from "styled-components";
import brand from "../../assets/images/brand.svg";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  .header-brand-warp {
    width: 117px;
    height: 24px;
    background-image: url(${brand});
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 30px 0 0;
  }

  .header-project-warp {
  }

  .header-member-warp {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectWrap = styled.div`
  .project-list-item {
    padding: 0;
  }

  .project-create {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MemberWrap = styled.div`
  .member-list-item {
    padding: 0;
  }
`;
