import { useState, FormEvent, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Placeholder } from '../../src/styles/typography';

export default function TextInputField({
  type,
  placeholder,
  onChange,
  value,
  onClick,
}: {
  type: string;
  placeholder?: string | null;
  onChange?(event: FormEvent<HTMLInputElement>): void;
  value: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
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
        <InputField type={type} value={value} onChange={onChange} />
      </InputWrapper>
    </>
  );
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const InputField = styled.input`
    background: ${(props) => props.theme.colours.lightTeal};
    border: none;
    padding: 12px;
    width: 100%;
    outline: none;
    cursor: 'text';
    &:focus {
      border-radius: 4px;
      background: none;
      outline: 1px solid ${(props) => props.theme.colours.teal};
      box-shadow(0px 0px 3px ${({ theme }) => theme.colours.primary});
      transition: 0.2s ease-in-out;
    }
  `;
