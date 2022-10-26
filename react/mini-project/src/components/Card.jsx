import React from "react";
import { IdCharacter } from "./IdCharacter";
import { Name } from "./NameCharacter";
import { Paragraph } from "./Paragraph";
import { Image } from "./Img";

export const Card = (props) => {
    const { character } = props;

    return (
        <div key={character.id}>
            <IdCharacter character={character} />
            <Name character={character.name} />
            <Paragraph character={character.status} />
            <Image character={character} />
        </div>
    );
};
