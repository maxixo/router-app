import PropTypes from "prop-types"


const MovieCard = ({ title, image, description, rating, func }) => {
  const styles = {
    image: {
      width: "100%",
      height: "200px",
    },
    container: {
      width: "200px",
      border: "1px solid black",
      borderRadius: "10px",
      margin: "10px",
      padding: "10px",
    },
  };

  return (
    <div style={styles.container} onClick={func} >
      <img
        src={
          image 
        }
        alt="image"
        style={styles.image}
      />
      <h3>{title || "Movie Title"}</h3>
      <p>{description}</p>
      <h3>Rating: {rating}</h3>
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.any,
  rating: PropTypes.any,
  title: PropTypes.string
}

export default MovieCard;