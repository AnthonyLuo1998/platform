import { styled } from "styled-components";

export const ProjectWrap = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .project-header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .create-project {
      font-size: 14px;
      color: blue;
      cursor: pointer;
    }
  }
`;
