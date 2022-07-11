import PropTypes from "prop-types";

const ModalBody = ({ children }) => (
  <div className="relative p-6 flex-auto">{children}</div>
);

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ModalBody;
