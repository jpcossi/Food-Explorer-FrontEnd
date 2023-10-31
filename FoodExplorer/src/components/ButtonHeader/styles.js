import styled from 'styled-components'

export const Container = styled.button`
  width: 21.6rem;
  background-color: ${({ theme }) => theme.COLORS.Tints_tomato_100};
  color: ${({ theme }) => theme.COLORS.Light_100};

  height: 5.6rem;
  border: 0rem;
  border-radius: 0.5rem;
  padding: 1.2rem, 3.2rem, 1.2rem, 3.2rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;

  &:disabled{
    opacity: 0.5;
  }
`