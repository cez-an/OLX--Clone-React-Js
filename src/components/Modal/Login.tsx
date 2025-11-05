import { Carousel, Modal } from "flowbite-react";

type LoginProps = {
  toggleModal: () => void;
  status: boolean;
};

const Login: React.FC<LoginProps> = ({ toggleModal, status }) => {
  return (
    <div>
      <Modal
        theme={{
          content: {
            base: "relative w-full p-4 md:h-auto",
            inner:
              "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700",
          },
        }}
        show={status}
      >
        <p onClick={toggleModal}>X</p>
        <Carousel></Carousel>
        <div>
          <img className="w-10" src="/assets/google.png" alt="" />
          <div>
            <p>continue with google</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
