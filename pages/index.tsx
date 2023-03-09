import { Container } from '../src/styles/generic';
import styled from 'styled-components';
import { H1 } from '../src/styles/typography';
import { AddContactModal } from '../components/molecules';

export default function Home() {
  return (
    <Container>
      <ContentWrapper>
        <H1>Address Book</H1>
        <FlexWrapper>
          <ColumnWrapper>
            <AddContactModal />
          </ColumnWrapper>
          <ColumnWrapper>
            <H1>Input goes here</H1>
          </ColumnWrapper>
        </FlexWrapper>
      </ContentWrapper>
    </Container>
  );
}

const ContentWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 80px; //check size
`;

const ColumnWrapper = styled.div`
  border: 1px solid purple;
  .left {
    flex: 25%;
  }
  .right {
    flex: 75%;
  }
`;
