import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const links = ["FAQ", "Help Center", "Account", "Terms of Use", "Contact Us"];

const socialLinks = [
  {
    name: "facebook",
    icon: <FacebookOutlined />,
    url: "https://www.facebook.com",
  },
  {
    name: "instagram",
    icon: <InstagramOutlined />,
    url: "https://www.instagram.com",
  },
  {
    name: "twitter",
    icon: <TwitterOutlined />,
    url: "https://www.twitter.com",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        {links.map((link) => (
          <Button type="text">{link}</Button>
        ))}
      </LinksContainer>
      <SocialLinksContainer>
        {socialLinks.map((socialLink) => (
          <Button
            icon={socialLink.icon}
            type="link"
            size="large"
            href={socialLink.url}
            target="_blank"
          />
        ))}
      </SocialLinksContainer>
      <p>&copy; 2022 JadeonEats, Inc. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  p {
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export default Footer;
