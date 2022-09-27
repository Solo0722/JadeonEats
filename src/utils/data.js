import { Button, List } from "antd";
import { FcHome } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

export const categories = [
  {
    id: "cat_nPEVlNLV0oa7dM",
    name: "Breakfast",
    image: "/assets/img/sidebar/coffeeandtea.png",
  },
  {
    id: "cat_bWZ3l86L8okpEQ",
    name: "Lunch",
    image: "/assets/img/sidebar/FastFood_BrowseHome@3x.png",
  },
  {
    id: "cat_QG375vVjQ5rMOg",
    name: "Supper",
    image: "/assets/img/sidebar/comfortfood.png",
  },
  {
    id: "cat_0egY5eRMpl3QnA",
    name: "Local",
    image: "/assets/img/sidebar/comfortfood.png",
  },
  {
    id: "cat_RqEv5xLz15Zz4j",
    name: "Continental",
    image: "/assets/img/sidebar/american.png",
  },
  {
    id: "",
    name: "Bakery",
    image: "/assets/img/sidebar/bakery.png",
  },
  {
    id: "cat_8XxzoB8qglPQAZ",
    name: "Desserts",
    image: "/assets/img/sidebar/dessert.png",
  },
  {
    id: "cat_8XxzoB8qglPQAZ",
    name: "Drinks",
    image: "/assets/img/sidebar/coffeeandtea.png",
  },
  {
    id: "cat_8XxzoB8qglPQAZ",
    name: "Snacks",
    image: "/assets/img/sidebar/icecreamandyogort.png",
  },
];

export const RenderCategoryList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <List bordered={false}>
        <List.Item style={{ border: "none" }}>
          <Button
            icon={<FcHome style={{ marginRight: "10px" }} size={20} />}
            type="text"
            block
            onClick={() => navigate("/menu")}
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              height: "50px",
              textAlign: "left",
              borderLeft: `${
                location.pathname === "/menu" ? "3px solid #e8505b" : ""
              }`,
              opacity: `${location.pathname === "/menu" ? "1" : "0.7"}`,
              fontWeight: `${location.pathname === "/menu" ? "bold" : ""}`,
            }}
          >
            Home
          </Button>
        </List.Item>
        {categories.map((cat) => (
          <List.Item
            key={cat.name}
            style={{
              border: "none",
            }}
          >
            <Button
              type="text"
              block
              onClick={() => navigate(`/menu/${cat.name.toLowerCase()}`)}
              icon={
                <img
                  src={cat.image}
                  width={25}
                  height={25}
                  style={{ marginRight: "10px" }}
                />
              }
              style={{
                textAlign: "left",
                borderLeft: `${
                  location.pathname === `/menu/${cat.name.toLowerCase()}`
                    ? "3px solid #e8505b"
                    : ""
                }`,
                opacity: `${
                  location.pathname === `/menu/${cat.name.toLowerCase()}`
                    ? "1"
                    : "0.7"
                }`,
                fontWeight: `${
                  location.pathname === `/menu/${cat.name.toLowerCase()}`
                    ? "bold"
                    : ""
                }`,
                height: "50px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              {cat.name}
            </Button>
          </List.Item>
        ))}
      </List>
    </>
  );
};
