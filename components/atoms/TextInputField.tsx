import { useState, FormEvent, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Placeholder } from '../../src/styles/typography';

export default function TextInputField({
  type,
  placeholder,
  onChange,
  value,
  onClick,
  error,
}: {
  type: string;
  placeholder?: string | null;
  onChange?(event: FormEvent<HTMLInputElement>): void;
  value: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  error?: boolean;
}) {
  const [hidePlaceholder, setHidePlaceholder] = useState(false);

  const onFocus = () => {
    setHidePlaceholder(true);
  };

  const onBlur = () => {
    setHidePlaceholder(false);
  };
  return (
    <>
      <InputWrapper onBlur={onBlur} onFocus={onFocus} onClick={onClick}>
        {!value && !hidePlaceholder && <Placeholder>{placeholder}</Placeholder>}
        <InputField
          aria-label={value === 'email' ? 'email' : 'text'}
          aria-required="true"
          error={error}
          type={type}
          value={value}
          onChange={onChange}
        />
      </InputWrapper>
    </>
  );
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const InputField = styled.input<{ error: boolean | undefined }>`
  background: ${(props) => (props.error ? props.theme.colours.lightCoral : props.theme.colours.lightTeal)};
  border: none;
  padding: 12px;
  width: 100%;
  outline: none;
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
    transition: 0.2s ease-in-out;
  }
`;
