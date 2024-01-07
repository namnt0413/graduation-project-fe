import HomeLeftContent from "../HomeMainContent/HomeLeftContent";
import HomeRightContent from "../HomeMainContent/HomeRightContent";

const HomeMainContent = () => {
  return (
    <>
      <div  className="jp_first_sidebar_main_wrapper">
        <div  className="container">
          <div  className="row">
            <HomeLeftContent />
            <HomeRightContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainContent;
