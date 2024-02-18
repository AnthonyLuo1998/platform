import { BoardWrap } from "./style";
import { Select, Input, Space, Button, Modal, Form } from "antd";
import BoardDrop from "./board_drop";
import {
  orderBoard,
  orderSameTask,
  orderDiffTask,
  addTask,
} from "../../redux/slice/drop";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Board() {
  const dispatch = useDispatch();

  const [curBoard, setCurBoard] = useState(null);

  const hhh = useState(123)
  console.log(hhh)

  const [form] = Form.useForm();

  const boardList = useSelector((state) => state.drop.boardList);

  const handleDragEnd = (e) => {
    const { destination, source } = e;

    if (!destination) return;

    if (e.type === "task") {
      if (destination.droppableId === source.droppableId) {
        dispatch(
          orderSameTask({
            destination: destination,
            source: source,
          })
        );
      } else {
        dispatch(orderDiffTask({ destination, source }));
      }
    }

    if (e.type === "board") {
      dispatch(orderBoard({ destination: destination, source: source }));
    }
  };

  // 新建任务

  const [openCreateTask, setOpenCreateTask] = useState(false);

  const handleCreateTask = (e) => {
    setCurBoard(e);
    setOpenCreateTask(true);
  };

  const handleCreateTaskOk = async () => {
    try {
      const formData = await form.validateFields();
      if (formData) {
        dispatch(addTask(curBoard));
      }
    } catch (error) {}
  };

  const handleCreateTaskCancel = () => {
    setOpenCreateTask(false);
    form.resetFields();
  };

  // 新建面板

  const [openCreateBoard, setOpenCreateBoard] = useState(false);

  const handleCreateBoard = (e) => {
    setOpenCreateBoard(true);
  };

  const handleCreateBoardOk = async () => {
    try {
      const formData = await form.validateFields();
      if (formData) {
      }
    } catch (error) {}
  };

  const handleCreateBoardCancel = () => {
    setOpenCreateBoard(false);
    form.resetFields();
  };

  const clearFilters = () => {};
  return (
    <BoardWrap>
      <div className="board-wrap-title">
        <span>xxx敏捷项目管理研发看板</span>
      </div>

      <div className="board-wrap-operator">
        <Space wrap size="middle">
          <Button type="primary" onClick={handleCreateBoard}>
            新建面板
          </Button>

          <Input placeholder="任务名" style={{ width: 280 }} />

          <Select
            style={{ width: 120 }}
            placeholder={<span style={{ color: "black" }}>经办人</span>}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />

          <Select
            style={{ width: 120, color: "black" }}
            placeholder={<span style={{ color: "black" }}>类型</span>}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />

          <Button onClick={clearFilters}>清除筛选器</Button>
        </Space>
      </div>

      <div className="board-wrap-content">
        <BoardDrop
          list={boardList}
          handleDragEnd={handleDragEnd}
          handleCreateTask={handleCreateTask}
        />
      </div>

      <Modal
        title="新建任务"
        open={openCreateTask}
        onOk={handleCreateTaskOk}
        okText="创建"
        cancelText="取消"
        onCancel={handleCreateTaskCancel}
      >
        <Form
          form={form}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          style={{ marginTop: 40 }}
        >
          <Form.Item
            name="task_name"
            label="任务名称"
            rules={[
              {
                required: true,
                message: "请输入任务名称！",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            name="task_type"
            label="任务类型"
            rules={[
              {
                required: true,
                message: "请输入任务类型！",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            name="task_owner"
            label="任务负责人"
            rules={[
              {
                required: true,
                message: "请输入任务负责人！",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="新建面板"
        open={openCreateBoard}
        onOk={handleCreateBoardOk}
        okText="创建"
        cancelText="取消"
        onCancel={handleCreateBoardCancel}
      >
        <Form
          form={form}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          style={{ marginTop: 40 }}
        >
          <Form.Item
            name="task_name"
            label="任务名称"
            rules={[
              {
                required: true,
                message: "请输入任务名称！",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            name="task_type"
            label="任务类型"
            rules={[
              {
                required: true,
                message: "请输入任务类型！",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item
            name="task_owner"
            label="任务负责人"
            rules={[
              {
                required: true,
                message: "请输入任务负责人！",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
        </Form>
      </Modal>
    </BoardWrap>
  );
}

export default Board;
