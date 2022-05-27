import styled from 'styled-components';

export const Container = styled.div`
  width: min(40rem, 60%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  padding: 3.4rem 3.1rem;
`;

export const Icon = styled.span`
  color: #219653;
  font-size: 3.5rem;

  margin-bottom: 1.1rem;
`;
export const MessageSuccess = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;

  text-align: center;
  letter-spacing: -0.035em;

  color: #4f4f4f;

  margin-bottom: 2.6rem;
`;
export const Img = styled.img`
  width: 100%;
  height: 30%;
  border-radius: 1.2rem;

  margin-bottom: 2.6rem;
`;
export const LinkImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #f6f8fb;

  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;

  width: 100%;
  height: 3.4rem;
`;
export const Url = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.2rem;

  text-align: center;
  letter-spacing: -0.035em;

  margin: 0 1.1rem;

  color: #4f4f4f;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: scroll;

  scrollbar-width: none;
`;
export const CopyButton = styled.button`
  cursor: pointer;

  background: #2f80ed;
  border-radius: 0.8rem;
  height: 100%;
  width: 30%;

  padding: 0.9rem 1.8rem;

  > p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.2rem;

    text-align: center;
    letter-spacing: -0.035em;

    color: #ffffff;
  }
`;
