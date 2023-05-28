import { getSingleCourse } from 'componemt/prisma/courses';

const CourseVideo = ({ course }) => {
  return (
    <div className="course-details wrapper py-10 min-h-screen">
      <div
        style={{ backgroundImage: `url(${course.cover})` }}
        className="w-full h-[30rem] bg-no-repeat bg-cover bg-center"
      />
      <div className="mt-10 grid lg:grid-cols-1  space-y-2 lg:space-y-0">
        <div className="left space-y-2">
          <h2 className="text-4xl font-medium md:text-6xl">{course.title}</h2>
          <p className="text-xl font-medium md:text-2xl">
            Instructor: {course.instructor}
          </p>
          <p className="text-lg font-sans tracking-widest leading-10">
            {course.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;

export const getServerSideProps = async ({ query }) => {
  const course = await getSingleCourse(query.courseId);

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
