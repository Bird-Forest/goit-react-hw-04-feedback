import { SectionFB, SectionTitle } from './SectionFB.styled';

export function Section({ title, children }) {
  return (
    <SectionFB>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionFB>
  );
}
