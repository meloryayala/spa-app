import Character from "./Character";
import {useEffect, useState} from "react";

const List = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await fetch('https://rickandmortyapi.com/api/character');

            const {results} = await data.json;
            setCharacter(results);
        }

        fetchData();

    }, [characters.length])

    return (
        <div>
        <h2>Characters</h2>
            <Character />
            <Character />
        </div>
    )
}

export default List;