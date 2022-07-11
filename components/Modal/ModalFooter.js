import PropTypes from "prop-types";

const ModalFooter = ({ children }) => (
  <div className="flex items-center justify-end p-6 rounded-b">{children}</div>
);

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ModalFooter;
