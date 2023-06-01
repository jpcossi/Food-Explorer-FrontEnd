import styled from 'styled-components'

export const Container = styled.button`
  width: 216px;
  background-color: ${({ theme }) => theme.COLORS.Tints_tomato_100};
  color: ${({ theme }) => theme.COLORS.Light_100};

  height: 56px;
  border: 0px;
  border-radius: 5px;
  padding: 12px, 32px, 12px, 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
  text-align: center;

  &:disabled{
    opacity: 0.5;
  }
`