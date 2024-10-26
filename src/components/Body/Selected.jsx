import PropTypes from "prop-types";
import { IoMdSad } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
export default function Selected({ selected, handleDelete }) {
    // const { image, name, battingType, ballingType } = selected;
    console.log(selected);


    return (
        <div className="flex flex-col gap-3">
            {
                selected.length ? (
                    selected.map((player) => (
                        <div key={player.id} className="border rounded-lg flex justify-between p-3 items-center">
                            <div className="flex gap-5 items-center">
                                <img src={player.image} alt="player" className="h-20 w-24 rounded-lg object-cover" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold">{player.name}</h3>
                                    <p className="opacity-70">{player.playingStyle || player.bowlingType}</p>
                                </div>
                            </div>

                            <MdDeleteForever className="text-3xl hover:text-red-500 hover:cursor-pointer" onClick={() => handleDelete(player.id)} />
                        </div>
                    ))) :
                    <p className="text-2xl flex gap-2 items-center justify-center">No selected players yet <IoMdSad /></p>
            }
        </div>
    )
}

Selected.propTypes = {
    selected: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,

}
