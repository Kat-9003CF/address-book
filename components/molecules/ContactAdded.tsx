import { Button } from '../../src/styles/generic';
import { TealBodyText } from '../../src/styles/typography';
import { useAddressStore } from '../../src/zustand/store';
import styled, { css } from 'styled-components';
import { mq } from '../../src/utils/mq';

export default function ContactAdded() {
  const { setShowFirstModal, resetForm } = useAddressStore();

  return (
    <ContentWrapper>
      <div>
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
      </div>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 110px 162px;
  ${mq.tablet(css`
    padding: 55px 80px;
  `)};
  ${mq.tablet(css`
    padding: 40px 50px;
  `)};
`;

const ButtonWrapper = styled.div`
  margin-top: 46px;
  ${mq.mobile(css`
    position: relative;
    margin: 0 auto;
    margin-top: 12px;
    width: 100%;
  `)};
`;
