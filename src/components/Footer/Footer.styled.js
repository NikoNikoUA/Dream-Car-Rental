import styled from "styled-components";

export const FooterContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 1px solid black;
`;

export const ElementsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const A = styled.a`
  color: black;
  font-weight: bold;
`;

export const FireBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.mainColor};
  height: 30px;
  width: 50px;
  color: white;
  transition: background-color 250ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
  }
`;
