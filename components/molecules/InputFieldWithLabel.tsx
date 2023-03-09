import styled from 'styled-components';
import { BodyText } from '../../src/styles/typography';
import { TextInputField } from '../atoms';
import { FormEvent } from 'react';

export default function InputFieldWithLabel({
  label,
  type,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type: string;
  value: string;
  onChange?(event: FormEvent<HTMLInputElement>): void;
  placeholder?: string;
}) {
  return (
    <>
      {label && <LabelText>{label}</LabelText>}
      <TextInputField type={type} placeholder={placeholder || null} onChange={onChange} value={value} />
    </>
  );
}

const LabelText = styled(BodyText)`
  margin: 17px 0 17px 5px;
  width: 100%;
`;
