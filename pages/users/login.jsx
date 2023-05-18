import SectionTitle from 'componemt/components/SectionTitle';
import { getSession, signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = ({ session }) => {
  console.log(session);
  const loginWithGoogle = async () => {
    try {
      await signIn('google');
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="login wrapper py-10 min-h-screen">
      <SectionTitle
        span={'Login'}
        h2={'Get Started With Google'}
        p={'Please login to continue our latest features'}
      />

      <div className="flex justify-center">
        <button
          onClick={loginWithGoogle}
          className={
            'flex gap-2 items-center bg-black text-white py-3 px-6 rounded-lg font-medium mt-10 hover:bg-gray-700 duration-300'
          }
        >
          <span className="text-2xl">
            <FcGoogle />
          </span>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
  }

  return {
    props: {
      session,
    },
  };
};
