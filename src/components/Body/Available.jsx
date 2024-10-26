import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import Card from "./Card"

export default function Available({ handleChoosePlayer, handleNewCoin }) {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                players.map(player => <Card key={player.id} player={player} handleChoosePlayer={handleChoosePlayer} handleNewCoin={handleNewCoin} />)
            }
        </div>
    )
}

Available.propTypes = {
    handleChoosePlayer: PropTypes.func.isRequired,
    handleNewCoin: PropTypes.func.isRequired
}
