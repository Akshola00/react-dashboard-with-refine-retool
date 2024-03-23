import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";


import { useLogout, useGetIdentity } from "@refinedev/core";

import {
  Layout as AntdLayout,
  Avatar,
  Space,
  Switch,
  Typography,
  theme,
} from "antd";
import React, { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode";

const { Text } = Typography;
const { useToken } = theme;

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky,
}) => {
  const { mutate, isLoading } = useLogout();
  const { data: identity } = useGetIdentity();

  const { token } = useToken();
  const { data: user } = useGetIdentity<IUser>();
  const { mode, setMode } = useContext(ColorModeContext);

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1;
  }

  return (
    <AntdLayout.Header style={headerStyles}>
      <Space>
           <h2>Welcome!</h2>
      <button
        type="button"
        disabled={isLoading}
        onClick={mutate}
      >
        Logout
      </button>
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        <Space style={{ marginLeft: "8px" }} size="middle">
         <span>welcome, </span>
         <span>{identity?.name ?? ""}</span>
        </Space>
      </Space>
    </AntdLayout.Header>
  );
};
