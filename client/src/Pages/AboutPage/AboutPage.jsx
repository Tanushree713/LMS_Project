import CarouselSlides from "../../Components/CarouselSlides/CarouselSlides";
import HomeLayout from "../../Layouts/HomeLayouts/HomeLayout";
import { celebrities } from "../../Constants/Celebrity/Celebrity";
import aboutMainImage from "../../Assets/Images/aboutMainImage.png";

function AboutPage() {
  return (
    <HomeLayout>
      <div className="flex flex-col text-white pl-20 pt-20">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their skills, creativity and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              src={aboutMainImage}
              className="drop-shadow-2xl"
              alt="about main page"
            />
          </div>
        </div>
        <div className="carousel w-1/2 my-10 mx-auto">
          {celebrities &&
            celebrities.map((celebrity) => (
              <CarouselSlides
                {...celebrity}
                key={celebrity.slideNumber}
                totalSlides={celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutPage;
