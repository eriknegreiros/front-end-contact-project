import styled from "styled-components";

export const ModalDiv = styled.div`
  .divSearch {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 50px;
  }

  h2 {
    font-family: var(--font);
    font-size: 1.3rem;
    color: black;
  }

  span {
    font-weight: bold;
  }

  input {
    width: 80vw;
    height: 30px;
    border-radius: 30px;
    border: 1px solid black;
    font-family: var(--font);
    padding-left: 10px;
    text-align: center;
  }

  .btnCreate {
    color: white;
    width: 90px;
    height: auto;
    font-weight: bold;
    font-size: 1.2rem;
    background-color: black;
    border-radius: 15px;
    border: none;
    cursor: pointer;
  }

  .form {
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  @media (min-width: 768px) {
    .divSearch {
      display: flex;
      flex-direction: row;
    }

    input {
      width: 50vw;
      text-align: left;
    }
  }
`;
