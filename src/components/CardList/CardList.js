import PropTypes from 'prop-types';

import { StyledCard, StyledCardList } from './CardList.styled';

const CardList = ({ list, type }) => {
  const cardList = list?.map((item, index) => (
    <StyledCard
      key={item.id || index}
      title={
        item.title ||
        item?.association_name ||
        `${item.firstname} ${item.lastname}`
      }
      description={
        item.description ||
        item.developer?.description ||
        item.user?.description
      }
      type={type}
      slug={item.slug || item?.slug || item.developer?.slug}
      imageUrl={item?.imageUrl}
    />
  ));
  return <StyledCardList>{cardList}</StyledCardList>;
};

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default CardList;
