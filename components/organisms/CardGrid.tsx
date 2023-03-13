import { useEffect } from 'react';
import { Contact, useAddressStore } from '../../src/zustand/store';
import { ContactCard, EmptyGrid } from '../atoms';
import styled, { css } from 'styled-components';
import { mq } from '../../src/utils/mq';

export default function CardGrid() {
  const { contacts, filteredContacts, resetFilteredContacts, unsetSearchTerms } = useAddressStore();

  useEffect(() => {
    contacts && unsetSearchTerms === '' && resetFilteredContacts();
  }, [unsetSearchTerms, resetFilteredContacts, contacts]);

  return (
    <CardGridWrapper>
      {contacts.length ? (
        <GridWrapper>
          {filteredContacts.map((contact: Contact, i: number) => (
            <CardWrapper key={i}>
              <ContactCard
                firstName={contact.firstName}
                lastName={contact.lastName}
                emailAddress={contact.emailAddress}
              />
            </CardWrapper>
          ))}
        </GridWrapper>
      ) : (
        <EmptyGrid />
      )}
    </CardGridWrapper>
  );
}

const CardGridWrapper = styled.div`
  margin-top: 87px;
  ${mq.tablet(css`
    margin-top: 44px;
  `)};
  ${mq.mobile(css`
    margin-top: 24px;
  `)};
`;

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;

  ${mq.tablet(css`
    grid-template-columns: repeat(2, 1fr);
  `)};
  ${mq.mobile(css`
    display: inline;
  `)};
`;

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;
