import { Container } from '../src/styles/generic';
import styled, { css } from 'styled-components';
import { H1 } from '../src/styles/typography';
import { CardGrid, Modal } from '../components/organisms';
import { SearchBar } from '../components/atoms';
import { mq } from '../src/utils/mq';
import Head from 'next/head';

export default function Home() {
  return (
    <OuterWrapper>
      <Head>
        <title>Address Book</title>
      </Head>
      <Container role="main">
        <H1>Address Book</H1>
        <FlexWrapper>
          <ColOneWrapper>
            <Modal />
          </ColOneWrapper>
          <ColTwoWrapper>
            <SearchBar />
            <CardGrid />
          </ColTwoWrapper>
        </FlexWrapper>
      </Container>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 100px;
  ${mq.tablet(css`
    display: inline-block;
    gap: 0;
  `)};
  ${mq.mobile(css`
    display: inline;
  `)};
`;

const ColOneWrapper = styled.div`
  padding-top: 20px;
  max-width: 500px;
  ${mq.mobile(css`
    max-width: 400px;
  `)};
  ${mq.tablet(css`
    padding: 0;
    max-width: unset;
  `)};
`;

const ColTwoWrapper = styled.div`
  max-width: 1000px;
  min-width: 900px;
  ${mq.desktopSmall(css`
    max-width: 800px;
    min-width: unset;
  `)};
  ${mq.tablet(css`
    max-width: unset; 
    min-width: unset;
%;
  `)};
`;
