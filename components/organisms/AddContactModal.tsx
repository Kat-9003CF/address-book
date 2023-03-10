import styled from 'styled-components';
import { ModalHeader } from '../../src/styles/typography';
import { InputFieldWithLabel } from '../molecules';
import { Button } from '../../src/styles/generic';
import { useAddressStore } from '../../src/zustand/store';
import { useEffect, useState } from 'react';

export default function AddContactModal() {
  const { firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress } = useAddressStore();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (emailAddress: string) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress);
  };

  useEffect(() => {
    !emailAddress && setIsValidEmail(true);
  }, [emailAddress, lastName, firstName]);

  const isDisabled = !firstName && !lastName && !emailAddress;
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ModalHeader>Add Contact Details</ModalHeader>
        <InputFieldWithLabel
          label="First Name"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName((event.target as HTMLTextAreaElement).value)}
          placeholder="Enter first name"
        />
        <InputFieldWithLabel
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(event) => setLastName((event.target as HTMLTextAreaElement).value)}
          placeholder="Enter last name"
        />
        <InputFieldWithLabel
          label="Email"
          type="email"
          value={emailAddress}
          onChange={(event) => setEmailAddress((event.target as HTMLTextAreaElement).value)}
          placeholder="Enter your email"
          error={!isValidEmail}
        />
        <ButtonWrapper>
          <Button onClick={() => setIsValidEmail(!emailAddress && !validateEmail(emailAddress))} disabled={isDisabled}>
            Add Contact
          </Button>
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
