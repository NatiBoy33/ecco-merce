import "./directory.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
