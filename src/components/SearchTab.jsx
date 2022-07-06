import React, { useContext, useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { AppContext } from "../context/Context";

const SearchTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchProductsBySearch, fetchProducts } = useContext(AppContext);

  const search = () => {
    if (searchTerm === "" || searchTerm === undefined || searchTerm === null) {
      fetchProducts();
    } else {
      fetchProductsBySearch(searchTerm);
    }
  };
  return (
    <Input
      placeholder="Search..."
      style={{ borderRadius: "20px", marginBottom: "10px" }}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}

      suffix={
        <Button type="link" size="small" onClick={search}>
          <SearchOutlined />
        </Button>
      }
    />
  );
};

export default SearchTab;
