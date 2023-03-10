import { Container, OuterWrapper } from '../src/styles/generic';
import styled from 'styled-components';
import { H1 } from '../src/styles/typography';
import { AddContactModal, CardGrid } from '../components/organisms';
import { SearchBar } from '../components/atoms';

export default function Home() {
  return (
    <OuterWrapper>
      <Container>
        <ContentWrapper>
          <H1>Address Book</H1>
          <FlexWrapper>
            <ColumnWrapper>
              <AddContactModal />
            </ColumnWrapper>
            <ColumnWrapper>
              <SearchBar />
              <CardGrid />
            </ColumnWrapper>
          </FlexWrapper>
        </ContentWrapper>
      </Container>
    </OuterWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 80px; //check size
`;

const ColumnWrapper = styled.div`
  .left {
    flex: 25%;
  }
  .right {
    flex: 75%;
  }
`;
