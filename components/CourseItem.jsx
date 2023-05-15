import { currencyConverter } from 'componemt/utils/currencyconverter';
import Image from 'next/image';
import { AiOutlineStar } from 'react-icons/ai';
import Button from './Button';

const CourseItem = ({ course }) => {
  return (
    <div className="w-full lg:w-[30rem] shadow-md rounded-md overflow-hidden">
      <div className="item-img w-full object-cover h-[21rem] lg:h-[20rem] overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={320}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="item-text p-5 space-y-2">
        <h3 className="text-3xl lg:text-2xl font-medium ">{course.title}</h3>
        <p>{course.description}</p>
        <p className="flex gap-5 justify-between text-gray-600">
          <span>
            by{' '}
            <span className="text-black font-semibold">
              {course.instructor}
            </span>
          </span>
          <span>duration: {course.duration}</span>
        </p>
        <div className="flex gap-5">
          <p className="flex items-center gap-5">
            <span className="flex items-center">
              {course.rating}
              <span className="flex pl-1 text-orange-400">
                <AiOutlineStar /> <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
            </span>
            <span>Students: {course.students}</span>
          </p>
          <p>Price: {currencyConverter(course.price, 'en-GB', 'EUR')}</p>
        </div>
        <div>
          <Button href={`/courses/${course.id}`} placeholder="View Course" />
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
