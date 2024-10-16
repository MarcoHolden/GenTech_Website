import { FC } from "react";

import { HomepageBody } from "./_components/HomepageBody/HomepageBody";
// import "./App.css";
import CursorTrail from "./_components/CursorTrail/CursorTrail";
import { HomepageNavbar } from "./_components/HomepageNavbar/HomepageNavbar";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div>
      <HomepageNavbar />
      <CursorTrail />
      <HomepageBody />
    </div>
  );
};

export default HomePage;
