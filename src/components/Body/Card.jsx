import PropTypes from "prop-types"
import { FaFlag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Card = ({ player, handleChoosePlayer }) => {
    const { name, image, nationality, playerType, playingStyle, bowlingType, price } = player;
    return (
        <div className="flex flex-col gap-3 border rounded-lg p-5">
            <img src={image} alt="" className="rounded-lg h-[240px]" />
            <h3 className="flex items-center gap-2 text-lg font-semibold"><FaUser />{name}</h3>
            <div className="flex items-center justify-between">
                <p className="flex gap-2 items-center opacity-70"><FaFlag />{nationality}</p>
                <p className="border px-4 py-1 rounded-lg text-opacity-70 font-normal">{playerType}</p>
            </div>
            <h4 className="font-semibold border-t">Rating</h4>
            <div className="flex items-center justify-between">
                <p>{playingStyle || "N/A"}</p>
                <p className="opacity-70">{bowlingType || "N/A"}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Price: {price}</p>
                <button className="btn btn-sm text-opacity-70 font-normal hover:bg-[#E7FE29]" onClick={() => handleChoosePlayer(player)}>Choose Player</button>
            </div>
        </div>
    )
}
export default Card

Card.propTypes = {
    player: PropTypes.object.isRequired,
    handleChoosePlayer: PropTypes.func.isRequired
}