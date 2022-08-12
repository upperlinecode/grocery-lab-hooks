import styled from "styled-components";

export const ProductRoot = styled.div`
  /* border: 1px solid #ccc; */
  margin: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  background-color: #eee;

  h2 {
    margin: 0;
    padding: 10px;
    background-color: #85b24f;
    color: white;
    text-align: center;
    font-size: 2rem;
    line-height: 60px;
  }

  h3 {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;

  button {
    padding: 6px 12px;
    outline: none;
    font-weight: 100;
    margin-right: 6px;
    font-size: 1.5rem;
    border: none;
    background-color: rgba(0, 0, 0, 0);

    :hover {
      color: white;
      background-color: #85b24f;
    }
  }
`;
