import { useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useOutsideClickCallback } from "@/hooks/useOutsideClickCallback";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";

const Modal = ({ title, body, children, isVisible, setVisible }) => {
  const elementRef = useRef(null);

  return (
    <>
      {isVisible ? (
        <>
          <div className="flex bg-white/75 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className={classNames(
                  "w-full",
                  "relative flex flex-col",
                  "border-0",
                  "rounded-lg",
                  "shadow-lg bg-base-white-100",
                  "outline-none focus:outline-none"
                )}
                ref={elementRef}
              >
                <ModalHeader>
                  <h4>{title}</h4>
                  <button
                    className="flex items-center justify-center w-6 h-6"
                    onClick={() => setVisible(false)}
                  >
                    <FaTimes />
                  </button>
                </ModalHeader>
                {(children && <>{children}</>) || (
                  <>
                    <ModalBody>{body}</ModalBody>
                    <ModalFooter>
                      <button onClick={() => setVisible(false)}>Close</button>
                    </ModalFooter>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-base-black-800" />
        </>
      ) : null}
    </>
  );
};

Modal.defaultProps = {
  isVisible: false,
};

Modal.propTypes = {
  setVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Modal;
