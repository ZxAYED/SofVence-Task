import SearchBar from "@/App/Shared/SearchBar";
import JoinUs from "./JoinUs";
import TopManufacturer from "./TopManufacturer";
import Thambnail from "@/App/Shared/Thambnail";

const Home = () => {
return (
  <>
    <div>Welcome to SoftVence</div>
    <SearchBar />
    <Thambnail />
    <TopManufacturer />
    <JoinUs />
  </>
);
};

export default Home;
