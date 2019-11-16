
import React from 'react';
import Button from '../styles/button';

import Layout from "../components/Layout";
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import styled from 'styled-components';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;


const IndexPage = () => (
  <Layout/>
);

export default IndexPage;