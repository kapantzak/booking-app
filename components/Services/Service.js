import PropTypes from "prop-types";

const Service = ({ id, name, clickHandler }) => {
  return (
    <div
      className="text-center py-2 md:w-1/2 lg:w-1/4 border border-solid border-cyan-600 rounded"
      role="button"
      aria-label={`Service - ${name}`}
      onClick={() => clickHandler({ id, name })}
    >
      {name}
    </div>
  );
};

Service.defaultProps = {
  clickHandler: () => {},
};

Service.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Service;
