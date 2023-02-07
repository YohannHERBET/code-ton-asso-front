import titleEnum from '../../global/enums/titleEnum';
import {
  StyledHome,
  StyledSubTitle,
  StyledTitle,
  StyledParagraph,
  StyledSlider,
  StyledInfos,
} from './Home.styled';
import Card from '../../components/Card/Card';
import cardTypeEnum from '../../global/enums/cardTypeEnum';

const PROJECT_SLUG = '/projet';
const ASSOCIATION_SLUG = '/association';
const DEVELOPER_SLUG = '/developpeur';

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
      <Card
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
      <Card
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
      <Card
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
        <StyledSubTitle content="Sous Titre" variant={titleEnum.h2} />
        <StyledParagraph>
          La plateforme de mise en relation entre les associations et les
          développeurs
        </StyledParagraph>
      </StyledInfos>
      <StyledSlider>{projects}</StyledSlider>
      <StyledSlider>{associations}</StyledSlider>
      <StyledSlider>{developers}</StyledSlider>
    </StyledHome>
  );
};

export default Home;
