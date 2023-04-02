import styled from "styled-components";

export const FormModal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */

  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100vh;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8);

  .formUpdate {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30vh;
    gap: 10px;
  }

  h2 {
    font-family: var(--font);
    font-size: 1.3rem;
    color: var(--white);
  }

  input {
    font-family: var(--font);
    font-size: 1rem;
  }

  .divTitle {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 13vw;
  }

  span {
    color: red;
    font-family: var(--font);
    font-size: 1rem;
    cursor: pointer;
  }

  button {
    color: var(--white);
    font-family: var(--font);
  }

  @media (min-width: 768px) {
    .inputUpdate {
      width: 30vw;
    }
  }
`;
