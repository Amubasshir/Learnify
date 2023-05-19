import { getSingleCourse } from 'componemt/prisma/courses';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const Checkout = ({ course }) => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  return <div>[courseid]</div>;
};

export default Checkout;

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
