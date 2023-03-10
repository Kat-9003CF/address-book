import styled from 'styled-components';
import { BodyText } from '../../src/styles/typography';
import { Button, OuterWrapper } from '../../src/styles/generic';
import { useAddressStore } from '../../src/zustand/store';

export default function AddContactModal() {
  const { setShowFirstModal, resetForm } = useAddressStore();
  return (
    <ModalBorder>
      <InnerWrapper>
        <TealBodyText>Your contact was added</TealBodyText>
        <ButtonWrapper>
          <Button
            onClick={() => {
              setShowFirstModal(true);
              resetForm();
            }}
          >
            Add Another
          </Button>
        </ButtonWrapper>
      </InnerWrapper>
    </ModalBorder>
  );
}

const ModalBorder = styled(OuterWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colours.teal};
  border-radius: 4px;
  width: 527px;
  height: 306px;
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
`;

const TealBodyText = styled(BodyText)`
  color: ${(props) => props.theme.colours.teal};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
`;
