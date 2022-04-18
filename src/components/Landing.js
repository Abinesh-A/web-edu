import { Search } from "./search/Search";

export const Landing = () => {
  
  return (
    <div>
      <div  className="mt-5"></div>
      <Search oncall="search"></Search>
      <div></div>
    </div>
  );
};

export default Landing;
