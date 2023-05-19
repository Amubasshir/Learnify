import SectionTitle from 'componemt/components/SectionTitle';
import { getSingleCourse } from 'componemt/prisma/courses';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

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

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionTitle
        span={'Checkout'}
        h2={'Please provide your details'}
        p={
          'Please,complete the form below to proceed with the checkout process'
        }
      />
      <div className="flex justify-center">
        <form className="flex flex-col gap-5 mt-10 w-full lg:w-[36rem]">
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="name" className="cursor-pointer">
              Name
            </label>
            <input
              className="outline-none border py-3 px-4 shadow-sm rounded-lg focus:border-gray-500"
              type="text"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              readOnly="true"
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              className="outline-none border py-3 px-4 shadow-sm rounded-lg focus:border-gray-500"
              type="email"
              id="email"
              placeholder="hello@example.com"
              value={formData.email}
              readOnly="true"
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="mobile" className="cursor-pointer">
              Phone number
            </label>
            <input
              className="outline-none border py-3 px-4 shadow-sm rounded-lg focus:border-gray-500"
              type="tel"
              id="mobile"
              placeholder="+88017xxxxxxxx"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="address" className="cursor-pointer">
              Address
            </label>
            <input
              className="outline-none border py-3 px-4 shadow-sm rounded-lg focus:border-gray-500"
              type="text"
              id="address"
              placeholder="abc street,NYC."
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="courseTitle" className="cursor-pointer">
              Course title
            </label>
            <input
              className="outline-none border py-3 px-4 shadow-sm rounded-lg focus:border-gray-500"
              type="text"
              id="courseTitle"
              placeholder="Advanced React 2024"
              readOnly="true"
              value={formData.courseTitle}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="price" className="cursor-pointer">
              Price €
            </label>
            <input
              className="outline-none border py-3 px-4 shadow-sm rounded-lg focus:border-gray-500"
              type="number"
              id="price"
              placeholder="99.99"
              readOnly="true"
              value={formData.price}
            />
          </div>
          <button className="bg-black py-4 px-3 rounded-lg text-white uppercase">
            Proceed To Checkout
          </button>
        </form>
      </div>
    </div>
  );
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
