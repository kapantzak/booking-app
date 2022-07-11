import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import Modal, { ModalBody } from "@/components/Modal";

const LoginModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    initializeGoogleButton,
    handleCustomCredentials,
    handleEmailChange,
    handlePasswordChange,
  } = useAuth();

  const handleButtonClick = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    if (modalVisible) {
      initializeGoogleButton();
    }
  }, [modalVisible]);

  return (
    <>
      <button type="button" onClick={handleButtonClick}>
        Login
      </button>
      <Modal
        title="Login"
        isVisible={modalVisible}
        setVisible={setModalVisible}
      >
        <ModalBody>
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleCustomCredentials}
          >
            <input
              name="email"
              type="text"
              onChange={handleEmailChange}
              placeholder="Email"
              aria-label="Email"
            />
            <input
              name="password"
              type="password"
              onChange={handlePasswordChange}
              placeholder="Password"
              aria-label="Password"
            />
            <button>Login</button>
          </form>
          <hr />
          <div id="buttonDiv"></div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default LoginModal;
