import styled from 'styled-components';
import { BodyText, Placeholder } from '../../src/styles/typography';

export default function ContactCard({
  firstName,
  lastName,
  emailAddress,
}: {
  firstName: string;
  lastName: string;
  emailAddress: string;
}) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <CardText>Name</CardText>
        <CardDetails>{`${firstName} ${lastName}`}</CardDetails>
        <CardText>Email</CardText>
        <CardDetails>{`${emailAddress}`}</CardDetails>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  transition: 0.2s ease-in-out;
  border: 1px solid ${(props) => props.theme.colours.teal};
  border-radius: 4px;
  padding: 35px 38px;
`;
const InnerWrapper = styled.div``;

const CardText = styled(BodyText)`
  color: ${(props) => props.theme.colours.teal};
`;

const CardDetails = styled(Placeholder)`
  z-index: 1;
  position: relative;
`;
