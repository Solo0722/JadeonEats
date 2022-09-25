import React, { useContext, useState } from "react";
import { Input, Button } from "antd";
import { AppContext } from "../context/Context";
import { BiSearch } from "react-icons/bi";

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
      style={{
        borderRadius: "20px",
        marginBottom: "10px",
        boxShadow: "rgba(0,0,0,0.24) 0px 2px 1px",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      suffix={
        <Button type="text" size="small" onClick={search}>
          <BiSearch />
        </Button>
      }
    />
  );
};

export default SearchTab;
