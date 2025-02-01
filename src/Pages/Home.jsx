import Review from "../component/Review";

import Profile from "../component/Profile";
import Description from "../component/Description";
import Mdreview from "../component/Mdreview";
import Lgreview from "../component/Lgreview";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Profile />
      <Description />
      <Review />
      <Mdreview />
      <Lgreview />
    </div>
  );
};

export default Home;
