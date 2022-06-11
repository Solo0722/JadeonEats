import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchTab = () => {
  return (
    <Input
      placeholder="Search..."
      suffix={
        <Button type="text" size="small">
          <SearchOutlined />
        </Button>
      }
    />
  );
};

export default SearchTab;
