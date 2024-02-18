import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardList: [
    {
      id: "1",
      value: "gggg",
      task: [
        {
          id: "11",
          value: "好家伙",
        },
        {
          id: "12",
          value: "好东西",
        },
        {
          id: "13",
          value: "坏东西",
        },
      ],
    },
    {
      id: "2",
      value: "gggg",
      task: [
        {
          id: "21",
          value: "很急",
        },
        {
          id: "22",
          value: "先别急",
        },
        {
          id: "23",
          value: "我知道你很急",
        },
        {
          id: "24",
          value: "很急",
        },
        {
          id: "25",
          value: "先别急",
        },
        {
          id: "26",
          value: "我知道你很急",
        },
        {
          id: "27",
          value: "很急",
        },
        {
          id: "28",
          value: "先别急",
        },
        {
          id: "29",
          value: "我知道你很急",
        },
      ],
    },
    {
      id: "3",
      value: "gggg",
      task: [
        {
          id: "31",
          value: "很急",
        },
        {
          id: "32",
          value: "先别急",
        },
        {
          id: "33",
          value: "我知道你很急",
        },
      ],
    },
    {
      id: "4",
      value: "gggg",
      task: [
        {
          id: "41",
          value: "很急",
        },
        {
          id: "42",
          value: "先别急",
        },
        {
          id: "43",
          value: "我知道你很急",
        },
      ],
    },
  ],
};

// 排序
function orderList(list, destination, source) {
  const [removed] = list.splice(source, 1);
  list.splice(destination, 0, removed);
}

const dropSlice = createSlice({
  name: "drop",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const target = state.boardList.find((el) => el.id === action.payload);
      target.task.push({
        id: new Date().toLocaleString(),
        value: "新建任务",
      });
    },
    orderSameTask: (state, action) => {
      const { destination, source } = action.payload;
      const target = state.boardList.find(
        (el) => el.id === destination.droppableId + ""
      );
      orderList(target.task, destination.index, source.index);
    },
    orderDiffTask: (state, action) => {
      const { destination, source } = action.payload;
      const sourceList = state.boardList.find(
        (el) => el.id === source.droppableId
      );
      const destinationList = state.boardList.find(
        (el) => el.id === destination.droppableId
      );
      let [removed] = sourceList.task.splice(source.index, 1);
      destinationList.task.splice(destination.index, 0, removed);
    },
    orderBoard: (state, action) => {
      const { destination, source } = action.payload;
      orderList(state.boardList, destination.index, source.index);
    },
  },
});

export const { addTask, orderSameTask, orderDiffTask, orderBoard } =
  dropSlice.actions;

export default dropSlice.reducer;
