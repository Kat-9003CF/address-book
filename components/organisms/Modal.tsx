import styled, { css } from 'styled-components';
import { AddContact, ContactAdded } from '../molecules';
import { useAddressStore } from '../../src/zustand/store';
import { mq } from '../../src/utils/mq';

export default function AddContactModal() {
  const { showFirstModal } = useAddressStore();
  return (
    <ModalBorder data-cy="modal">
      {showFirstModal ? (
        <InnerWrapper>
          <AddContact />
        </InnerWrapper>
      ) : (
        <ContactAdded />
      )}
    </ModalBorder>
  );
}

const ModalBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colours.teal};
  border-radius: 4px;
  min-width: 500px;
  max-width: 527px;
  width: 100%;
  position: relative;
  ${mq.tablet(css`
    min-width: unset;
    max-width: 100%;
  `)};
  ${mq.mobile(css`
    min-width: unset;
    max-width: 100%;
  `)};
`;

const InnerWrapper = styled.div`
  margin: 37px 34px 118px 34px;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  max-width: 460px;
  min-width: 400px;
  ${mq.tablet(css`
    min-width: unset;
    width: 100%;
    max-width: unset;
    margin: 30px 28px 80px 28px;
  `)};
  min-width: unset;
  width: 100%;
  max-width: unset;
  ${mq.mobile(css`
    margin: 20px 16px;
  `)};
`;
