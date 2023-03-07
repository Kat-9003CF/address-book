import { useStore } from '../src/zustand/store';
import { Container } from '../src/styles/generic';
import styled from 'styled-components';

export default function Home() {
  const { theme, setTheme } = useStore((state) => state);

  return (
    <OuterWrapper>
      <Container>
        <h1>Address Book</h1>
      </Container>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div``;
