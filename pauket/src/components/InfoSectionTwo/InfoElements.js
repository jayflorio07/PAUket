import styled from "styled-components";

export const TopLine = styled.p`
  color: #f5ad4b;
  font-size: 60px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Heading = styled.h1`
  margin-bottom: 40px;
  font-size: 45px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#f7f8fa")};
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 0px;
  font-size: 20px;
  line-height: 1.25;
  color: ${({ darkText }) => (darkText ? "#fff" : "#fff")};
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;
