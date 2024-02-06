import { Table, Input, Select, Space, Typography } from "antd";
import { ProjectWrap } from "./style";
import Collect from "./collect";
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
  return (
    <ProjectWrap>
      <Typography.Title level={3}>项目列表</Typography.Title>

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
