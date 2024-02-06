import { styled } from "styled-components";

export const LayoutWrap = styled.div`
  width: 100%;
  height: 100%;
  .layout_header_warp {
    width: 100%;
    height: 64px;
  }

  .layout_center_warp {
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .layout_aside_warp {
    width: 210px;
    height: 100%;
    /* background-color: yellow; */
  }

  .layout_content_warp {
    flex: 1;
    height: 100%;
    /* background-color: skyblue; */
  }
`;
