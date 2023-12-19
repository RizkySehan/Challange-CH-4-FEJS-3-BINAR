import PropTypes from "prop-types";

function CastCard({ profile_path, name, character }) {
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={`${IMAGE_PATH_CARD}${profile_path}`}
        alt="Cast_Profile"
        className="w-40 h-40 rounded-full object-cover"
      />
      <h2 className="text-white text-xl">{name}</h2>
      <h3 className="text-slate-600 text-lg">{character}</h3>
    </div>
  );
}

CastCard.propTypes = {
  profile_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default CastCard;
