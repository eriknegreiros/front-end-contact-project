import styled from "styled-components";

export const LoginDiv = styled.div`
  background: #fff
    url(https://www.creativefabrica.com/wp-content/uploads/2022/06/30/Blue-and-purple-gradient-Background-Graphics-33291056-1-580x386.png)
    center center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;

  h1 {
    text-align: center;
    color: var(--white);
    margin-bottom: 30px;
    font-family: var(--font);
    font-size: 2rem;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    border-radius: 20px;
    border: 3px solid white;
    background: #fff
      url(https://www.creativefabrica.com/wp-content/uploads/2022/06/30/Blue-and-purple-gradient-Background-Graphics-33291056-1-580x386.png)
      center center/cover no-repeat;
    width: auto;
    height: auto;
  }

  label {
    font-family: var(--font);
    color: var(--white);
    font-size: 1.1rem;
  }

  input {
    width: 75vw;
    border-radius: 20px;
    border: none;
    height: 40px;
    font-family: var(--font);
    padding-left: 10px;
    font-size: 1rem;
  }

  .divBtnSubmit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
  }
  p {
    font-family: var(--font);
    color: var(--white);
  }

  button {
    width: 50vw;
    height: 35px;
    border-radius: 20px;
    border: none;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--font);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
  }

  button:hover {
    color: white;
    background-color: black;
    transition: 1s;
  }

  @media (min-width: 768px) {
    input {
      width: 400px;
    }

    button {
      width: 200px;
    }
  }
`;
