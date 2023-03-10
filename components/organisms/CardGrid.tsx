import React from 'react';
import { Contact, useAddressStore } from '../../src/zustand/store';
import { ContactCard } from '../atoms';
import styled from 'styled-components';

export default function CardGrid() {
  const { contacts } = useAddressStore();
  return (
    <OuterWrapper>
      <InnerWrapper>
        {contacts &&
          contacts.map((contact: Contact, i: number) => (
            <div key={i}>
              <ContactCard contact={contact} />
            </div>
          ))}
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div``;
const InnerWrapper = styled.div``;
