import { Container } from "@mui/material";
import styled from "styled-components";

export const PagesContainer = styled.div`
  background-color: #24325fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 70px;
`;

export const FavoriteContent = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const AppContainer = styled.div`
  background-color: #dbd6d0;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
