import styled from 'styled-components';
import { TealBodyText } from '../../src/styles/typography';

export default function EmptyGrid() {
  return (
    <CardWrapper>
      <TealBodyText>Please add your first contact</TealBodyText>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79px;
  border: 1px solid ${(props) => props.theme.colours.teal};
  border-radius: 4px;
`;
