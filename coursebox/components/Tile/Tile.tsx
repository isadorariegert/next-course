import styled from '@emotion/styled';
import { FC } from 'react';

import { borderRadius, boxShadow } from '../styles';

type Props = {
  header: string;
  children: string;
};

const Section = styled.section`
  ${borderRadius}
  padding: 10px 20px 20px 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
`;

export const Tile: FC<Props> = ({ header, children }) => (
  <Section>
    <h2>{header}</h2>
    {children}
  </Section>
);
