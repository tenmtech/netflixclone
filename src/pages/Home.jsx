import React from "react";
import Mainpage from "../components/Mainpage";
import Row from "../components/Row";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <Mainpage />
      <Row rowID="1" title="Coming soon" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};

export default Home;
