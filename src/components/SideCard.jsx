import PropTypes from "prop-types";
import styles from "./SideCard.module.css"

function SideCard({data: {image, title}}) {
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  );
}

SideCard.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  };

export default SideCard