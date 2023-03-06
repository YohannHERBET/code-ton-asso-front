import axios from 'axios';
import { useState, useEffect } from 'react';
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
import Loader from '../../components/Loader/Loader';

const PROJECT_SLUG = '/projets';
const ASSOCIATION_SLUG = '/associations';
const DEVELOPER_SLUG = '/developpeurs';

const apiEndpointsEnum = [
  { name: 'associations', path: 'associations/latest' },
  { name: 'developers', path: 'developers/latest' },
  { name: 'projects', path: 'projects' },
];

const Home = () => {
  const [data, setData] = useState({
    associations: [],
    developers: [],
    projects: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const promises = apiEndpointsEnum.map((apiEndpoint) =>
        axios.get(`${process.env.REACT_APP_API_URL}${apiEndpoint.path}`)
      );

      const responses = await Promise.all(promises);

      const newData = responses.reduce(
        (datum, response, index) => ({
          ...datum,
          [apiEndpointsEnum[index].name]: response.data,
        }),
        {}
      );
      setData(newData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const projects = data?.projects?.slice(0, 3).map((project) => {
    const { id, title, description, slug, imageUrl } = project;
    return (
      <StyledCard
        key={id}
        title={title}
        description={description}
        slug={`${PROJECT_SLUG}/${slug}`}
        imageUrl={imageUrl}
        type={cardTypeEnum.project}
      />
    );
  });

  const associations = data?.associations?.slice(0, 3).map((association) => {
    const { association_name: associationName, slug } = association.association;
    const { id, description, imageUrl } = association;

    return (
      <StyledCard
        key={id}
        title={associationName}
        description={description}
        slug={`${ASSOCIATION_SLUG}/${slug}`}
        imageUrl={imageUrl}
        type={cardTypeEnum.association}
      />
    );
  });

  const developers = data?.developers?.slice(0, 3).map((developer) => {
    const { id, description, imageUrl, firstname, lastname } = developer;
    const { slug } = developer.developer;

    return (
      <StyledCard
        key={id}
        title={`${firstname} ${lastname}`}
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

      <Loader loading={loading} />

      {projects?.length >= 1 && (
        <StyledSection>
          <StyledSliderTitle
            content="Les derniers projets"
            variant={titleEnum.h2}
          />
          <StyledSlider>
            {projects}
            <StyledCardMore title="Voir tous les projets" slug={PROJECT_SLUG} />
          </StyledSlider>
        </StyledSection>
      )}
      {associations?.length >= 1 && (
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
      )}

      {developers?.length >= 1 && (
        <StyledSection>
          <StyledSliderTitle
            content="Les derniers développeurs"
            variant={titleEnum.h2}
          />
          <StyledSlider>
            {developers}
            <StyledCardMore
              title="Voir tous les développeurs"
              slug={DEVELOPER_SLUG}
            />
          </StyledSlider>
        </StyledSection>
      )}
    </StyledHome>
  );
};

export default Home;
