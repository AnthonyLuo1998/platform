import { List, Typography, Button } from "antd";
import { Popover } from "antd";
import { useState } from "react";
import { ProjectWrap } from "./style";

function ProjectPopover() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const content = (
    <ProjectWrap>
      <List>
        <List.Item className="project-list-item">
          <p>物流管理项目</p>
        </List.Item>
        <List.Item className="project-list-item">
          <p>淘宝管理项目</p>
        </List.Item>
        <List.Item className="project-list-item">
          <p>建筑管理项目</p>
        </List.Item>
      </List>
      <div className="project-create">
        <Button type="link" size="small" loading={loading}>
          创建项目
        </Button>
      </div>
    </ProjectWrap>
  );

  return (
    <Popover
      content={content}
      title="项目列表"
      trigger="click"
      open={open}
      onOpenChange={setOpen}
    >
      <Typography.Title level={4} style={{ margin: 0, cursor: "pointer" }}>
        项目
      </Typography.Title>
    </Popover>
  );
}

export default ProjectPopover;
