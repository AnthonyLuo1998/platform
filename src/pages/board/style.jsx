import styled from "styled-components";

export const BoardWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 44px;
  box-sizing: border-box;

  .board-wrap-title {
    height: 48px;
    font-size: 24px;
    overflow: hidden;
  }

  .board-wrap-operator {
    height: 32px;
  }

  .board-wrap-content {
    background: rgb(76, 154, 255);
    border-radius: 2px;
    margin-top: 20px;
    height: calc(100% - 32px - 48px - 40px);
    box-sizing: border-box;
    width: 100%;
  }
`;

export const DropWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .droppable-warp {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }

  .draggable-warp {
    width: 280px;
    height: 100%;

    .draggable-warp-content {
      margin: 8px;
      display: flex;
      flex-direction: column;
      background-color: rgb(235, 236, 240);
      padding: 8px;
      border-radius: 2px;
    }

    .draggable-warp-title {
      font-size: 14px;
      margin: 2px 0px 6px 0px;
      font-weight: 500;
    }

    .draggable-warp-create-task {
      float: right;
    }

    .drag-wrap-task {
      width: 100%;
      height: 64px;
      background: white;
      margin-bottom: 6px;
      border-radius: 3px;
      font-size: 14px;
    }

    .drop-wrap-task {
      min-height: 70px;
    }
  }
`;
