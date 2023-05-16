import { currencyConverter } from 'componemt/utils/currencyconverter';
import Image from 'next/image';
import { AiOutlineStar } from 'react-icons/ai';
import Button from './Button';

const CourseItem = ({ course }) => {
  return (
    <div className="w-full lg:w-[30rem] shadow-md rounded-md overflow-hidden">
      <div className="w-full h-[25rem] lg:h-[20rem] overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 ">
        <h3 className="text-3xl lg:text-2xl font-medium">{course.title}</h3>

        <p className="flex justify-between text-gray-500 pb-1">
          <span className="text-black">
            by{' '}
            <span className="text-black font-semibold">
              {course.instructor}
            </span>
          </span>
          <span className="text-black">
            Duration:{' '}
            <span className="text-black font-semibold">{course.duration}</span>
          </span>
        </p>

        <p className="flex justify-between text-gray-500 pb-2">
          <span className="text-black">
            Enrolled students:{' '}
            <span className="text-black font-semibold">{course.students}</span>
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineStar className="text-orange-500" />
            <AiOutlineStar className="text-orange-500" />
            <AiOutlineStar className="text-orange-500" />
            <AiOutlineStar className="text-orange-500" />
            <span className="text-black font-semibold">{course.rating}</span>
          </span>
        </p>

        <p
          className="text-gray-500 text-base leading-5
         font-light tracking-tighter pb-6"
        >
          {course.description.substring(0, 100)}...
        </p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">
            {currencyConverter(course.price, 'en-GB', 'EUR')}
          </p>
          <Button href={`/courses/${course.id}`} placeholder="View Details" />
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
