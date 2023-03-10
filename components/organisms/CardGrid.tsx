import { useEffect } from 'react';
import { Contact, useAddressStore } from '../../src/zustand/store';
import { ContactCard } from '../atoms';
import styled from 'styled-components';

export default function CardGrid() {
  const { filteredContacts, resetFilteredContacts, unsetSearchTerms } = useAddressStore();

  useEffect(() => {
    unsetSearchTerms === '' && resetFilteredContacts();
  }, [unsetSearchTerms, resetFilteredContacts]);

  return (
    <CardGridWrapper>
      <InnerWrapper>
        {filteredContacts &&
          filteredContacts.map((contact: Contact, i: number) => (
            <div key={i}>
              <ContactCard
                firstName={contact.firstName}
                lastName={contact.lastName}
                emailAddress={contact.emailAddress}
              />
            </div>
          ))}
      </InnerWrapper>
    </CardGridWrapper>
  );
}

const CardGridWrapper = styled.div`
  padding-top: 87px;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 48px;
  max-width: 990px;
`;
