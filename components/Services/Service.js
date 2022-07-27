import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Service = ({ id, name, description, imagePath, clickHandler }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: 345,
        m: 1,
      }}
    >
      <div>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imagePath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button size="small" onClick={() => clickHandler({ id, name })}>
          Select
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

Service.defaultProps = {
  imagePath: null,
  clickHandler: () => {},
};

Service.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Service;
