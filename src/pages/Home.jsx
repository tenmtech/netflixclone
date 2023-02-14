import React from "react";
import Mainpage from "../components/Mainpage";
import Row from "../components/Row";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <Mainpage />
      <Row title="Coming soon" fetchURL={requests.requestUpcoming} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};

export default Home;
