import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: min(40rem, 60%);
  height: min(14.6rem, 20vh);

  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;

  padding: 3.6rem 3.2rem;
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;

  letter-spacing: -0.035em;

  color: #4f4f4f;

  margin-bottom: 3rem;
`;

const loadingBarAnimation = keyframes`
  0% { transform: translateX(-110%); }
  100% { transform: translateX(340%); }
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 0.6rem;

  background: #f2f2f2;
  border-radius: 8px;

  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 30%;
    height: 100%;
    background: #2f80ed;
    border-radius: 8px;
    animation-name: ${loadingBarAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
`;
