import styled from "styled-components";

export const Cards = styled.main`
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
  }

  ul {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 70px;
  }

  li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff
      url(https://www.creativefabrica.com/wp-content/uploads/2022/06/30/Blue-and-purple-gradient-Background-Graphics-33291056-1-580x386.png)
      center center/cover no-repeat;
    gap: 10px;
    padding: 20px;
    border-radius: 20px;
    min-width: 200px;
    max-width: auto;
  }

  h3 {
    font-family: var(--font);
    font-size: 1.5rem;
    color: var(--white);
  }

  p {
    font-family: var(--font);
    font-size: 1rem;
    color: var(--white);
  }

  .divBtn {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 5px;
    height: 25px;
    text-align: center;
    cursor: pointer;
  }

  .icon {
    color: white;
  }

  .notContact {
    margin-top: 80px;
    color: black;
    font-size: 2.3rem;
    font-weight: 700;
    text-align: center;
    font-family: var(--font);
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

    ul {
      flex-direction: row;
    }
  }
`;
