import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  max-width: 100%;
  overflow: hidden;
  margin: auto;
`;

// ====================== Home Page =======================

export const Background = styled.section`
  background-image: ${(props) => props.$url || "none"};
  overflow: hidden;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
  position: absolute;
  width: 800px;
  height: 400px;
  border-radius: 10px;
`;

export const Text = styled.p`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  width: 700px;
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.mainColor};
  font-size: 25px;
  font-weight: bold;
`;

// =================== Catalog =========================

export const Container = styled.div`
  position: relative;
  min-width: 1440px;
  padding: 100px 128px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

// =================== FAVORITE =======================

export const FavCarsContainer = styled.ul`
  width: 1184px;
  display: flex;
  column-gap: 29px;
  row-gap: 50px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const NotFoundMessage = styled.div`
  color: red;
  font-size: 18px;
`;

export const TextFav = styled.p`
  font-size: 40px;
  color: ${(props) => props.theme.colors.mainColor};
  font-weight: bold;
  display: flex;
  justify-content: center;
`;
