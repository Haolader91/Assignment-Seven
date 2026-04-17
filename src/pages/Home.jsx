import React, { useState } from "react";
import Banner from "../components/Banner";
import SummaryCard from "../components/SummaryCard";
import FriendsCard from "../components/FriendsCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  return (
    <div>
      <Banner />
      <SummaryCard friends={friends} />
      <FriendsCard friends={friends} setFriends={setFriends} />
    </div>
  );
};

export default Home;
