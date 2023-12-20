import PropTypes from "prop-types";
import noProfile from "../assets/noProfile.png";

function CastCard({ profile_path, name, character }) {
  const IMAGE_PATH_CARD = import.meta.env.VITE_API_IMGURL_CARD;
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={profile_path ? `${IMAGE_PATH_CARD}${profile_path}` : noProfile}
        alt="Cast_Profile"
        className="w-32 h-32 rounded-full object-cover"
      />
      <h2 className="text-white text-sm">{name}</h2>
      <h3 className="text-slate-600 text-sm">{character}</h3>
    </div>
  );
}

CastCard.propTypes = {
  profile_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default CastCard;
