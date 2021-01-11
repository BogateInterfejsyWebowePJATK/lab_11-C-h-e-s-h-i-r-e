import React from "react";

export default function Buttons({x, i, del = f => f, toBin = f => f, toOct = f => f, toHex = f => f, refresh}) {

    const [data, setData] = React.useState("")

    React.useEffect(() => {
        setData("")
    }, [refresh])

    return (
        <li key={x}>{i}
            <button onClick={() => del(x)}>Usun</button>
            <button onClick={() => setData(toBin(x))}>Bin</button>
            <button onClick={() => setData(toOct(x))}>Oct</button>
            <button onClick={() => setData(toHex(x))}>Hex</button>
            <b>{data}</b>
        </li>
    )
}
