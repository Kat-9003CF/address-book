import { Contact } from '../../src/zustand/store';
import styled from 'styled-components';
import { BodyText, Placeholder } from '../../src/styles/typography';

export default function ContactCard(contact: Contact) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <CardText>Name</CardText>
        <Placeholder>{`${contact.firstName} ${contact.lastName}`}</Placeholder>
        <CardText>Email</CardText>
        <Placeholder>{`${contact.emailAddress}`}</Placeholder>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div``;
const InnerWrapper = styled.div``;

const CardText = styled(BodyText)`
  color: ${(props) => props.theme.colours.teal};
`;
