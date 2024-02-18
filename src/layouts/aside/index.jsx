import { useState } from "react";
import { AsideWrap } from "./style";
import { getItem } from "./utils";
import { useLocation, useNavigate } from "react-router-dom";

import { MailOutlined, SettingOutlined } from "@ant-design/icons";

import { Menu } from "antd";

function Aside() {
  const navigate = useNavigate();

  const location = useLocation();

  const params = location.pathname.split("/");

  const paramsLength = params.length - 1;

  const pathname = params[paramsLength];

  const id = params[paramsLength - 1];

  const [item, setItem] = useState([
    getItem("看板", `/project/${id}/borad`, <MailOutlined />),
    getItem("任务", `/project/${id}/epic`, <SettingOutlined />),
  ]);

  const handleClick = ({ key }) => {
    navigate(key);
  };

  return (
    <AsideWrap>
      <Menu
        mode="inline"
        defaultSelectedKeys={[`/project/${id}/${pathname}`]}
        items={item}
        style={{ width: "100%", height: "100%" }}
        onClick={handleClick}
      />
    </AsideWrap>
  );
}

export default Aside;
