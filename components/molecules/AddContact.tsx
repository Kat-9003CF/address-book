import React, { useEffect, useState } from 'react';
import { ModalHeader } from '../../src/styles/typography';
import InputFieldWithLabel from './InputFieldWithLabel';
import { useAddressStore } from '../../src/zustand/store';
import styled, { css } from 'styled-components';
import { mq } from '../../src/utils/mq';
import { Button } from '../../src/styles/generic';

export default function AddContact() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    emailAddress,
    setEmailAddress,
    createNewContact,
    setShowFirstModal,
  } = useAddressStore();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const addNewContact = ({
    firstName,
    lastName,
    emailAddress,
    isValidEmail,
  }: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    isValidEmail: boolean;
  }) => {
    if (isValidEmail) {
      const newContact = { firstName: firstName, lastName: lastName, emailAddress: emailAddress };
      createNewContact(newContact);
      setShowFirstModal(false);
    }
  };

  useEffect(() => {
    !emailAddress && setIsValidEmail(true);
  }, [emailAddress, lastName, firstName]);

  const isDisabled = !firstName && !lastName && !emailAddress;

  const validateEmail = (emailAddress: string) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress);
  };

  return (
    <ContentWrapper>
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
        onChange={(event) => {
          setEmailAddress((event.target as HTMLTextAreaElement).value);
          setIsValidEmail(!validateEmail(emailAddress));
        }}
        placeholder="Enter your email"
        error={!isValidEmail}
      />
      <ButtonWrapper>
        <Button
          onClick={() => {
            addNewContact({ firstName, lastName, emailAddress, isValidEmail });
          }}
          disabled={isDisabled}
        >
          Add Contact
        </Button>
      </ButtonWrapper>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 44px;
  bottom: 46px;
  ${mq.tablet(css`
    right: 28px;
    bottom: 18px;
  `)};
  ${mq.mobile(css`
    position: relative;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    margin-top: 12px;
  `)};
`;
