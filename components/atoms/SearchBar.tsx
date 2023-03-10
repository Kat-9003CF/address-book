import styled from 'styled-components';
import { useAddressStore } from '../../src/zustand/store';
import { Button } from '../../src/styles/generic';
import { useState } from 'react';
import { BodyText } from '../../src/styles/typography';

export default function SearchBar() {
  const { searchTerms, setSearchTerms } = useAddressStore();
  const [softSearchTerms, setSoftSearchTerms] = useState(searchTerms);

  return (
    <SearchAtomWrapper>
      <BodyText>Search address book</BodyText>
      <SearchWrapper>
        <SearchInput
          type="text"
          value={softSearchTerms}
          onChange={(event) => setSoftSearchTerms((event.target as HTMLInputElement).value)}
        />
        <Button onClick={() => setSearchTerms(softSearchTerms)} isSearch disabled={!softSearchTerms}>
          Search
        </Button>
      </SearchWrapper>
    </SearchAtomWrapper>
  );
}

const SearchAtomWrapper = styled.div`
  width: 100%;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
`;

const SearchInput = styled.input`
width: 100%;
height: 44px;
border: none;
background: ${(props) => props.theme.colours.lightTeal};
border-radius: 4px 0 0 4px;
font-family: ${(props) => props.theme.fonts.robotoSlabRegular};
font-size: ${(props) => props.theme.fontSizes.small};
line-height: ${(props) => props.theme.lineHeights.small};
font-weight: 300;
color: ${({ theme }) => theme.colours.darkGrey};
transition: 0.2s ease-in-out;
cursor: 'text';
&:focus {
  border-radius: 4px;
  background: none;
  outline: 1px solid ${(props) => props.theme.colours.teal};
  box-shadow(0px 0px 3px ${({ theme }) => theme.colours.primary});
  transition: 0.2s ease-in-out;`;
