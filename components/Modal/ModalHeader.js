import PropTypes from "prop-types";

const ModalHeader = ({ children }) => (
  <div className="flex items-start justify-between p-5 rounded-t">
    {children}
  </div>
);

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ModalHeader;
