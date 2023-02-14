import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import buttonColorEnum from '../../global/enums/buttonColorEnum';
import titleEnum from '../../global/enums/titleEnum';

import {
  // StyledButton,
  StyledCardList,
  StyledInfos,
  StyledList,
  StyledTitle,
} from './List.styled';

const List = (props) => {
  const { type, title, apiUrl } = props;

  const [list, setList] = useState([]);

  async function fetchData() {
    const response = await axios.get(apiUrl);
    setList(response.data);
  }

  useEffect(() => {
    // TODO: axios GET 8 cards
    try {
      setList([]);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [apiUrl]);

  // const handleMoreCards = () => {
  // TODO: axios GET 8 more cards
  //   axios.get(apiUrl);
  //   console.log(apiUrl);
  //   setList([...list, ...list]);
  // };

  return (
    <StyledList>
      <StyledInfos>
        <StyledTitle content={title} variant={titleEnum.h1} />
      </StyledInfos>
      {list.length >= 1 && (
        <>
          <StyledCardList list={list} type={type} />
          {/* <StyledButton
            color={buttonColorEnum.primary}
            label="Afficher plus"
            onClick={handleMoreCards}
          /> */}
        </>
      )}
    </StyledList>
  );
};

List.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  apiUrl: PropTypes.string.isRequired,
};

export default List;
