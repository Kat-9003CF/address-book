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
              <ContactCard
                firstName={contact.firstName}
                lastName={contact.lastName}
                emailAddress={contact.emailAddress}
              />
            </div>
          ))}
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div``;
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
`;
