import { getSingleCourse } from 'componemt/prisma/courses';

const CourseDetails = ({ course }) => {
  return (
    <div className="course-details wrapper py-10">
      <div
        style={{ backgroundImage: `url(${course.cover})` }}
        className="w-full sm:h-[30rem] h-[20rem] bg-no-repeat bg-cover bg-center"
      />
      <div className="mt-10">
        <div className="left">
          <h2 className="text-4xl">{course.title}</h2>
          <p>Instructor: {course.instructor}</p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default CourseDetails;

export const getServerSideProps = async ({ query }) => {
  const course = await getSingleCourse(query.courseid);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };
  console.log(updatedCourse);
  return {
    props: {
      course: updatedCourse,
    },
  };
};
