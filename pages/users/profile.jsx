import { getSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';

const ProfilePage = ({ session }) => {
  const router = useRouter();
  const signOutWithGoogle = async () => {
    try {
      await signOut('google');
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace('/users/login');
    }
  }, [router, session]);

  if (!session) {
    return null;
  }
  return (
    <div className="h-screen wrapper -mt-40 flex items-center justify-center mb-2 ">
      <div className="flex-col gap-5 ">
        <h2 className="text-2xl my-6">
          Welcome,
          <br />
          {session.user.name}
        </h2>
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={50}
          height={50}
          className="h-20 w-20 rounded-lg border-4 border-gray-700"
        />
        <h3 className="text-xl font-medium pt-4 text-black/80">
          Mobile: 01789745239
        </h3>
        <button
          onClick={signOutWithGoogle}
          className={
            'flex gap-2 items-center bg-black text-white py-3 px-6 rounded-lg font-medium mt-10 hover:bg-gray-900 duration-300'
          }
        >
          <span className="text-2xl">
            <FiLogOut />
          </span>
          Sign Out
        </button>
      </div>

      <div className=""></div>
    </div>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/users/login',
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
