import TopCompany from "./HomeLeftContent/TopCompany";
import RecentJob from "./HomeLeftContent/RecentJob";
import RegisterSection from "./HomeLeftContent/RegisterSection";

const HomeLeftContent = () => {
  return (
    <>
      <div  className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div  className="row">
          <TopCompany />
          <RecentJob />
          <RegisterSection />
        </div>
      </div>
    </>
  );
};

export default HomeLeftContent;
