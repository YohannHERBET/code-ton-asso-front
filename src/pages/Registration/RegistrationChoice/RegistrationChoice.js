import titleEnum from '../../../global/enums/titleEnum';
import imageAssociation from '../../../assets/association-registration.png';
import ImageDevelopper from '../../../assets/developper-registration.png';

import {
  StyledContainer,
  StyledTitle,
  StyledContainerCards,
  StyledRegistrationCard,
} from './RegistrationChoice.styled';

const RegistrationChoice = () => (
  <StyledContainer>
    <StyledTitle variant={titleEnum.h1} content="Inscription" />
    <StyledContainerCards>
      <StyledRegistrationCard
        slug="/inscription/association"
        text="Je suis une association"
        image={imageAssociation}
      />
      <StyledRegistrationCard
        slug="/inscription/developpeur"
        text="Je suis un développeur"
        image={ImageDevelopper}
      />
    </StyledContainerCards>
  </StyledContainer>
);

export default RegistrationChoice;
