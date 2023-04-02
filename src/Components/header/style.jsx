import styled from "styled-components";

export const HeaderDefault = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  background: #fff
    url(https://www.creativefabrica.com/wp-content/uploads/2022/06/30/Blue-and-purple-gradient-Background-Graphics-33291056-1-580x386.png)
    center center/cover no-repeat;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    font-family: var(--font-logo);
    font-size: 1.5rem;
    color: var(--white);
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  li {
    font-family: var(--font);
    font-size: 1rem;
    color: var(--white);
  }

  button {
    font-family: var(--font);
    border: none;
    border-radius: 20px;
    width: 80px;
    height: 30px;
    color: var(--white);
    background-color: #1b1b1b;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 70px;

    h1 {
      font-size: 2.5rem;
    }

    ul {
      flex-direction: row;
      gap: 90px;
    }

    li {
      font-size: 1.2rem;
    }
  }
`;
