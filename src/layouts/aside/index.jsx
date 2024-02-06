import { useState } from "react";
import { AsideWrap } from "./style";
import { getItem } from "./utils";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";

function Aside() {
  const [item, setItem] = useState([
    getItem("Navigation One", "sub1", <AppstoreOutlined />),
    getItem("Navigation Two", "sub2", <MailOutlined />),
    getItem("Navigation Three", "sub4", <SettingOutlined />),
  ]);
  return (
    <AsideWrap>
      <Menu
        mode="inline"
        items={item}
        style={{ width: "100%", height: "100%" }}
      />
    </AsideWrap>
  );
}

export default Aside;
