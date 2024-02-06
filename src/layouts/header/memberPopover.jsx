import { List, Typography } from "antd";
import { Popover } from "antd";
import { useState } from "react";
import { MemberWrap } from "./style";

function MemberPopover() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const content = (
    <MemberWrap>
      <List>
        <List.Item className="member-list-item">
          <p>尼古拉赵四</p>
        </List.Item>
        <List.Item className="member-list-item">
          <p>迷死他罗</p>
        </List.Item>
        <List.Item className="member-list-item">
          <p>皮特痒</p>
        </List.Item>
      </List>
    </MemberWrap>
  );

  return (
    <Popover
      content={content}
      title="组员列表"
      trigger="click"
      open={open}
      onOpenChange={setOpen}
    >
      <Typography.Title level={4} style={{ margin: 0, cursor: "pointer" }}>
        组员
      </Typography.Title>
    </Popover>
  );
}

export default MemberPopover;
