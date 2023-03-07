import { useStore } from '../src/zustand/store';
import { Container } from '../src/styles/generic';
import styled from 'styled-components';
import { H1 } from '../src/styles/typography';

export default function Home() {
  const { theme, setTheme } = useStore((state) => state);

  return (
    <OuterWrapper>
      <Container>
        <H1>Address Book</H1>
      </Container>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div``;
