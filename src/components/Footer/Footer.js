import footerNavigation from '../../global/footerNavigation';
import {
  StyledCopyright,
  StyledFooter,
  StyledLink,
  StyledLinks,
  StyledLogo,
} from './Footer.styled';

const Footer = () => {
  const linksList = footerNavigation.map((navItem) => (
    <StyledLink key={navItem.title} to={navItem.path}>
      {navItem.title}
    </StyledLink>
  ));
  return (
    <StyledFooter>
      <StyledLogo />
      <StyledLinks>{linksList}</StyledLinks>
      <StyledCopyright>©2022 Code Ton Asso</StyledCopyright>
    </StyledFooter>
  );
};

export default Footer;
