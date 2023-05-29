import { getTransition, shutterDown, shutterUp } from 'componemt/utils/motion';
import { motion } from 'framer-motion';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar h-20 bg-black text-gray-400 flex items-center">
      <div className="wrapper flex justify-between items-center overflow-hidden">
        <motion.div
          variants={shutterDown()}
          initial="from"
          animate="to"
          transition={getTransition()}
        >
          <Link href="/" className="text-white text-lg font-serif font-bold">
            Learnify
          </Link>
        </motion.div>
        <motion.div
          variants={shutterUp()}
          initial="from"
          animate="to"
          transition={getTransition()}
          className="flex gap-5 text-lg font-semibold"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition-colors">
            Courses
          </Link>
          {session && (
            <Link href="/orders" className="hover:text-white transition-colors">
              Orders
            </Link>
          )}
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </motion.div>
        <div>
          <motion.div
            variants={shutterDown()}
            initial="from"
            animate="to"
            transition={getTransition()}
          >
            {!session ? (
              <Button
                href="/users/login"
                placeholder="Sign in"
                color="secondary"
              />
            ) : (
              <Link href="/users/profile">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile image"
                />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || '/users/profile';

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
