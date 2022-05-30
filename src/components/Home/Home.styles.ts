import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: min(40.2rem, 50%);
  height: min(46.9rem, 90vh);

  background: #ffffff;
  box-shadow: 0px 4px 1.2rem rgba(0, 0, 0, 0.1);
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

  margin-bottom: 1.6rem;
`;
export const Description = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  text-align: center;
  letter-spacing: -0.035em;

  color: #828282;

  margin-bottom: 3rem;
`;

export const DragDrop = styled.div<{ isOverhead: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50%;

  background: ${(props) => (props.isOverhead ? '#fff' : '#f6f8fb')};
  border: 1px dashed ${(props) => (props.isOverhead ? '#2f80ed' : '#97bef4')};
  border-radius: 1.2rem;
`;
export const Icon = styled.img`
  width: min(11.4rem, 50%);
  height: min(8.8rem, 50%);
`;
export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;

  text-align: center;
  letter-spacing: -0.035em;

  color: #bdbdbd;

  margin: 2rem 0;
`;
export const ChooseFile = styled.label`
  background: #2f80ed;
  border-radius: 8px;

  padding: 0.8rem 1.6rem;

  cursor: pointer;

  > span {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: center;
    letter-spacing: -0.035em;

    color: #ffffff;
  }

  > input {
    display: none;
  }
`;
