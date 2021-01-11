import React from "react";
import Lista from "./lista"
import Tabela from "./tabela"
import list_of_random from "./random";

export default function Numbers() {

    const [numbers, setNumbers] = React.useState([])
    const [table, setTable] = React.useState(false)
    const [refresh, setRefresh] = React.useState(false)

    React.useEffect(() => {
        randomNumbers()
    }, [])

    const randomNumbers = () => {
        setNumbers(list_of_random)
        setRefresh(!refresh)
    }

    const del = (x) => {
        let n = [...numbers];
        n.splice(x, 1)
        setNumbers(n)
    }

    const toBin = (x) => {
        return parseInt(numbers[x]).toString(2)
    }

    const toOct = (x) => {
        return parseInt(numbers[x]).toString(8)
    }

    const toHex = (x) => {
        return parseInt(numbers[x]).toString(16)
    }

    return (
        <>
            <button onClick={randomNumbers}>Randomize</button>
            <button onClick={() => setTable(!table)}>{!table ? "Tabela" : "Lista"}</button>
            {!table
                ? <Lista numbers={numbers} del={del} toBin={toBin} toOct={toOct} toHex={toHex} refresh={refresh}></Lista>
                : <Tabela numbers={numbers} del={del} toBin={toBin} toOct={toOct} toHex={toHex}></Tabela>
            }
        </>
    );
}
