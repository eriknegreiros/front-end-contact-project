import styled from "styled-components";

export const ModalCreate = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 30px;
  }

  .divClose {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  span {
    color: red;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: var(--font);
    text-align: center;
    cursor: pointer;
  }

  h4 {
    text-align: center;
    color: var(--white);
    font-family: var(--font);
    font-size: 1.2rem;
    font-weight: 600;
  }

  input {
    width: 80vw;
    height: 30px;
    border-radius: 20px;
    border: none;
    padding-left: 10px;
    font-family: var(--font);
  }

  button {
    background-color: black;
    color: white;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    input {
      width: 30vw;
    }

    h4 {
      font-size: 1.8rem;
    }

    span {
      font-size: 1.8rem;
    }

    .divClose {
      gap: 8vw;
    }
  }
`;
