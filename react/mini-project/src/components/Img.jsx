import React from "react"

export const Image = ({character}) => {
    return (
        <>
            <img src={character.image} alt={character.name} />
        </>
    )
}