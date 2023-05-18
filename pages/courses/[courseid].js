import { getSingleCourse } from 'componemt/prisma/courses';
import { currencyConverter } from 'componemt/utils/currencyconverter';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const CourseDetails = ({ course }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleEnroll = () => {
    if (session) {
      router.push(`/checkout/${course.id}`);
    } else {
      router.push(`/users/login?destination=/checkout/${course.id}`);
    }
  };

  return (
    <div className="course-details wrapper py-10 min-h-screen">
      <div
        style={{ backgroundImage: `url(${course.cover})` }}
        className="w-full h-[30rem] bg-no-repeat bg-cover bg-center"
      />
      <div className="mt-10 grid lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0">
        <div className="left space-y-2">
          <h2 className="text-4xl md:text-2xl">{course.title}</h2>
          <p className="font-medium">Instructor: {course.instructor}</p>
          <p>{course.description}</p>
        </div>
        <div className="right space-y-2">
          <p>
            <span className="font-semibold">Duration:</span> {course.duration}
          </p>
          <p>
            <span className="font-semibold">Students:</span> {course.students}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {course.rating}
          </p>
          <p>
            <span className="font-semibold">Price:</span>
            {currencyConverter(course.price, 'en-GB', 'EUR')}
          </p>
          <button
            onClick={handleEnroll}
            className="bg-black text-white rounded-lg py-3 px-6 w-full lg:w-2/4"
          >
            Enroll Now
          </button>
        </div>
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
