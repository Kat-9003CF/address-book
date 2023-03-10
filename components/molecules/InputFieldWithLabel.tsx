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
  error,
}: {
  label: string;
  type: string;
  value: string;
  onChange?(event: FormEvent<HTMLInputElement>): void;
  placeholder?: string;
  error?: boolean;
}) {
  return (
    <>
      {label && <LabelText error={error}>{label}</LabelText>}
      {type === 'email' && error && <ErrorText>Please enter a valid email address</ErrorText>}
      <TextInputField type={type} placeholder={placeholder || null} onChange={onChange} value={value} error={error} />
    </>
  );
}

const LabelText = styled(BodyText)<{ error: boolean | undefined }>`
  margin: ${(props) => (props.error ? '17px 0 0 5px' : '17px 0 17px 5px')};
  width: 100%;
`;

const ErrorText = styled.p`
  font-family: ${(props) => props.theme.fonts.robotoSlabRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  color: ${(props) => props.theme.colours.coral};
  font-weight: 700;
  margin: 0 0 6px 5px;
  padding: 0;
`;
