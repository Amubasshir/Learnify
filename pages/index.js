import HeroSection from 'componemt/components/HeroSection';
import { getAllCourses } from 'componemt/prisma/courses';
import BottomBanner from './b-banner';
import CoursesPage from './courses';

const HomePage = ({ courses }) => {
  return (
    <div>
      <HeroSection />
      <CoursesPage courses={courses} />
      <BottomBanner />
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();
  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};
