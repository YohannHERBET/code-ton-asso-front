import {
  StyledHome,
  StyledSubTitle,
  StyledTitle,
  StyledSlider,
  StyledInfos,
  StyledCard,
  StyledCardMore,
  StyledSection,
  StyledSliderTitle,
} from './Home.styled';

import cardTypeEnum from '../../global/enums/cardTypeEnum';
import titleEnum from '../../global/enums/titleEnum';

const PROJECT_SLUG = '/projets';
const ASSOCIATION_SLUG = '/associations';
const DEVELOPER_SLUG = '/developpeurs';

const projectData = [
  {
    title: 'Titre du projet 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue pretium est vitae dictum. Ut ipsum metus, pulvinar eget facilisis id, placerat a risus. Duis semper porttitor nunc, sed cursus mauris maximus fermentum. Morbi nunc erat, ultricies vel tincidunt et, interdum et nulla. Ut varius in purus consectetur scelerisque',
    slug: '/projet1',
  },
  {
    title: 'Titre du projet 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue pretium est vitae dictum. Ut ipsum metus, pulvinar eget facilisis id, placerat a risus. Duis semper porttitor nunc, sed cursus mauris maximus fermentum. Morbi nunc erat, ultricies vel tincidunt et, interdum et nulla. Ut varius in purus consectetur scelerisque',
    slug: '/projet2',
  },
  {
    title: 'Titre du projet 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue pretium est vitae dictum. Ut ipsum metus, pulvinar eget facilisis id, placerat a risus. Duis semper porttitor nunc, sed cursus mauris maximus fermentum. Morbi nunc erat, ultricies vel tincidunt et, interdum et nulla. Ut varius in purus consectetur scelerisque',
    slug: '/projet3',
  },
];

const Home = () => {
  const projects = projectData?.slice(0, 3).map((project) => {
    const { title, description, slug, imageUrl } = project;
    return (
      <StyledCard
        title={title}
        description={description}
        slug={`${PROJECT_SLUG}/${slug}`}
        imageUrl={imageUrl}
        type={cardTypeEnum.project}
      />
    );
  });

  const associations = projectData?.slice(0, 3).map((association) => {
    const { title, description, slug, imageUrl } = association;
    return (
      <StyledCard
        title={title}
        description={description}
        slug={`${ASSOCIATION_SLUG}/${slug}`}
        imageUrl={imageUrl}
        type={cardTypeEnum.association}
      />
    );
  });

  const developers = projectData?.slice(0, 3).map((project) => {
    const { title, description, slug, imageUrl } = project;
    return (
      <StyledCard
        title={title}
        description={description}
        slug={`${DEVELOPER_SLUG}/${slug}`}
        imageUrl={imageUrl}
        type={cardTypeEnum.developer}
      />
    );
  });

  return (
    <StyledHome>
      <StyledInfos>
        <StyledTitle content="Code Ton Asso" variant={titleEnum.h1} />
        <StyledSubTitle>
          La plateforme de mise en relation entre les associations et les
          développeurs
        </StyledSubTitle>
      </StyledInfos>

      <StyledSection>
        <StyledSliderTitle
          content="Les derniers projets"
          variant={titleEnum.h2}
        />
        <StyledSlider>
          {projects}
          <StyledCardMore title="Voir tout les projets" slug={PROJECT_SLUG} />
        </StyledSlider>
      </StyledSection>

      <StyledSection>
        <StyledSliderTitle
          content="Les dernières associations"
          variant={titleEnum.h2}
        />
        <StyledSlider>
          {associations}
          <StyledCardMore
            title="Voir toutes les associations"
            slug={ASSOCIATION_SLUG}
          />
        </StyledSlider>
      </StyledSection>

      <StyledSection>
        <StyledSliderTitle
          content="Les derniers développeurs"
          variant={titleEnum.h2}
        />
        <StyledSlider>
          {developers}
          <StyledCardMore
            title="Voir tout les développeurs"
            slug={DEVELOPER_SLUG}
          />
        </StyledSlider>
      </StyledSection>
    </StyledHome>
  );
};

export default Home;
