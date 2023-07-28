import Star from "./Star";

const StarRating = ({ selectedStar, totalStar, onStarClick }) => {
  const stars = Array.from({ length: totalStar }, (_, index) => index + 1);

  return (
    <>
      {stars.map((star) => (
        <Star
          key={star}
          selected={star <= selectedStar}
          onClick={() => onStarClick(star)}
        />
      ))}
      {/* Add stars here with the help of Star component */}

      {/* add p tag here in this format {selectedStars} of {totalStars} like 1 of 5*/}
    </>
  );
};
export default StarRating;
