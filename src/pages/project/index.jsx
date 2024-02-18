import {
  Table,
  Input,
  Select,
  Space,
  Typography,
  Modal,
  Form,
  Divider,
} from "antd";
import { ProjectWrap } from "./style";
import Collect from "./collect";
import { useState } from "react";
const columns = [
  {
    title: <Collect isDisplay />,
    dataIndex: "collect",
    render: (text) => <Collect isCollect={text} />,
  },
  {
    title: "项目名称",
    dataIndex: "name",
    render: (text) => <p style={{ color: "#5352ed" }}>{text}</p>,
  },
  {
    title: "部门",
    dataIndex: "partment",
  },
  {
    title: "负责人",
    dataIndex: "owner",
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
  },
];

const data = [];
for (let i = 0; i < 24; i++) {
  data.push({
    key: i,
    collect: false,
    name: `Edward King ${i}`,
    partment: "研发",
    owner: `马克思 ${i}`,
    create_time: new Date().toLocaleString(),
  });
}

function Project() {
  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    try {
      const formData = await form.validateFields();
      if (formData) {
        form.resetFields();
        console.log(formData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <ProjectWrap>
      <div className="project-header-wrap">
        <Typography.Title level={3}>项目列表</Typography.Title>

        <span className="create-project" onClick={handleOpen}>
          创建项目
        </span>
      </div>

      <Modal
        title="创建项目"
        open={open}
        onOk={handleOk}
        okText="创建"
        cancelText="取消"
        onCancel={handleCancel}
      >
        <Form
          form={form}
          labelAlign="center"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          <Divider />

          <Form.Item
            name="project_name"
            label="项目名称"
            rules={[
              {
                required: true,
                message: "请输入项目名称！",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name="partment"
            label="所在部门"
            rules={[
              {
                required: true,
                message: "请选择项目所在部门！",
              },
            ]}
          >
            <Select
              mode="tags"
              style={{
                width: "100%",
              }}
              tokenSeparators={[","]}
              options={[
                { value: "1", label: "财务部" },
                { value: "2", label: "研发部" },
                { value: "3", label: "运营部" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="owner"
            label="负责人"
            rules={[
              {
                required: true,
                message: "请选择项目负责人！",
              },
            ]}
          >
            <Select
              mode="tags"
              tokenSeparators={[","]}
              options={[
                { value: "", label: "张三" },
                { value: "2", label: "李四" },
                { value: "3", label: "王五" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Space wrap>
        <Input.Search
          placeholder="input search text"
          onSearch=""
          style={{ width: 200 }}
          size="small"
        />

        <Select
          placeholder={<p style={{ color: "black" }}>负责人</p>}
          style={{ width: 120 }}
          size="small"
          onChange=""
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Space>

      <Table columns={columns} dataSource={data} />
    </ProjectWrap>
  );
}

export default Project;
