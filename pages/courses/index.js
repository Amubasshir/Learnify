import CourseItem from 'componemt/components/CourseItem';
import SectionTitle from 'componemt/components/SectionTitle';
import { getAllCourses } from 'componemt/prisma/courses';

const CoursesPage = ({ courses }) => {
  return (
    <div className="wrapper py-10">
      <SectionTitle
        span="Courses"
        h2="Find Your Perfect Course"
        p="Explore our courses to advance your skills, taught by passionate
          instructors with flexible options."
      />

      <div className="mt-10 flex flex-wrap gap-10">
        {courses?.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

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
