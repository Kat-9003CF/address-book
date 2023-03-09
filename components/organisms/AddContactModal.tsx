import styled from 'styled-components';
import { ModalHeader } from '../../src/styles/typography';
import { InputFieldWithLabel } from '../molecules';
import { Button } from '../../src/styles/generic';

const FirstName = '';
const LastName = '';
const EmailAddress = '';

const isDisabled = !FirstName && !LastName && !EmailAddress;

export default function AddContactModal() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ModalHeader>Add Contact Details</ModalHeader>
        <InputFieldWithLabel
          label="First Name"
          type="text"
          value={FirstName}
          // eslint-disable-next-line no-console
          onChange={() => console.log('change')}
          placeholder="Enter first name"
        />
        <InputFieldWithLabel
          label="Last Name"
          type="text"
          value={LastName}
          // eslint-disable-next-line no-console
          onChange={() => console.log('change')}
          placeholder="Enter last name"
        />
        <InputFieldWithLabel
          label="Email"
          type="text"
          value={EmailAddress}
          // eslint-disable-next-line no-console
          onChange={() => console.log('change')}
          placeholder="Enter your email"
        />
        <ButtonWrapper>
          <Button disabled={isDisabled}>Add Contact</Button>
        </ButtonWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colours.teal};
  border-radius: 4px;
  padding: 37px 34px 134px 34px;
  position: relative;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  max-width: 460px;
`;

const ButtonWrapper = styled.div`
  justify-self: flex-end;
  position: absolute;
  right: 44px;
  bottom: 46px;
`;
