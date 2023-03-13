import styled, { css } from 'styled-components';
import { BodyText, Placeholder } from '../../src/styles/typography';
import { BREAKPOINT_SM, mq } from '../../src/utils/mq';
import useWindowSize from '../../hooks/useWindowSize';

export default function ContactCard({
  firstName,
  lastName,
  emailAddress,
}: {
  firstName: string;
  lastName: string;
  emailAddress: string;
}) {
  const windowSize = useWindowSize();
  const isMobile: boolean = windowSize.width < BREAKPOINT_SM;
  return (
    <CardWrapper>
      <CardContentWrapper>
        {isMobile ? (
          <GridWrapper>
            <div>
              <CardText>Name</CardText>
              <CardDetails className="right-margin">{`${firstName} ${lastName}`}</CardDetails>
            </div>
            <div>
              <CardText className="top-margin">Email</CardText>
              <CardDetails>{`${emailAddress}`}</CardDetails>
            </div>
          </GridWrapper>
        ) : (
          <div>
            <CardText>Name</CardText>
            <CardDetails className="right-margin">{`${firstName} ${lastName}`}</CardDetails>{' '}
            <CardText className="top-margin">Email</CardText>
            <CardDetails>{`${emailAddress}`}</CardDetails>
          </div>
        )}
      </CardContentWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  transition: 0.2s ease-in-out;
  border: 1px solid ${(props) => props.theme.colours.teal};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq.tablet(css`
    max-width: unset;
    max-height: unset;
    width: 100%;
  `)};
  ${mq.mobile(css`
    padding: 0;
    margin: 0 auto;
  `)};
`;

const CardContentWrapper = styled.div`
  width: 285px;
  height: 204px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq.tablet(css`
    height: fit-content;
    margin: 16px;
  `)};
`;

const GridWrapper = styled.div`
  ${mq.mobile(css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `)};
`;

const CardText = styled(BodyText)`
  color: ${(props) => props.theme.colours.teal};
  &.top-margin {
    margin-top: 32px;
  }
  ${mq.mobile(css`
    &.top-margin {
      margin: 0;
    }
  `)};
`;

const CardDetails = styled(Placeholder)`
  z-index: 1;
  position: relative;
  padding-left: 0;
  margin: 0;
  padding: 0;
  ${mq.mobile(css`
    margin-left: 0;
  `)};
`;
