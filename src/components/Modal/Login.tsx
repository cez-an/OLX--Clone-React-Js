import { signInWithPopup } from "firebase/auth";
import { Modal } from "flowbite-react";
import { auth, provider } from "../Firebase/Firebase";

type LoginProps = {
  toggleModal: () => void;
  status: boolean;
};

const Login: React.FC<LoginProps> = ({ toggleModal, status }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info: ", result.user);
      toggleModal();
    } catch (error) {
      console.error("Google Login Failed: ", error);
    }
  };

  return (
    <Modal
      show={status}
      onClose={toggleModal}
      size="md"
      theme={{
        content: {
          base: "relative w-full p-6 md:h-auto",
          inner:
            "relative flex flex-col items-center gap-4 rounded-lg bg-white shadow-xl dark:bg-gray-800",
        },
      }}
    >

      <button
        onClick={toggleModal}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white"
      >
        <img src="/assets/close.svg" className="w-5" alt="close" />
      </button>


      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Welcome Back
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Sign in or create an account with Google
      </p>

      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-3 border px-5 py-2.5 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <img src="/assets/google.png" alt="google" className="w-6" />
        <span className="text-gray-700 font-medium dark:text-white">
          Continue with Google
        </span>
      </button>

      <div className="flex items-center w-full my-2">
        <hr className="grow border-gray-300 dark:border-gray-600" />
        <hr className="grow border-gray-300 dark:border-gray-600" />
      </div>

    </Modal>
  );
};

export default Login;
