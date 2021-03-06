import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      {/*       <Image
        className="w-52 mb-5"
        width="52"
        height="52"
        src="/images/spotify_logo.png"
      /> */}
      <img className="w-52 mb-5" src="/images/spotify_logo.png" alt="Spotify" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="">
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

// server side render to get all the providers
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
