import styled from 'styled-components';
import { ModalHeader, BodyText } from '../../src/styles/typography';

export default function AddContactModal() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ModalHeader>Add Contact Details</ModalHeader>
        <InputTitle>First Name</InputTitle>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colours.teal};
  border-radius: 5px;
  max-width: 527px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 37px 34px;
`;

const InputTitle = styled(BodyText)`
  margin-top: 17px;
`;
