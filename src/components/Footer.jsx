import React from "react";
import styled from "styled-components";

const links = ["FAQ", "Help Center", "Account", "Terms of Use", "Contact Us"];

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        {links.map((link) => (
          <p>{link}</p>
        ))}
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 100px;
  color: rgba(255, 255, 255, 0.5);
  padding: 10px 0;

  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export default Footer;
