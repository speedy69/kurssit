import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Osa = ({ osa }) => {
    return (
        <div>{osa.nimi} {osa.tehtavia}</div>
    )
}

const Sisalto = ({ osat }) => {
    return osat.map(osa => <Osa key={osa.nimi} osa={osa} />)
}

const Yhteensa = ({ osat }) => {
    const yht = osat.map(t => t.tehtavia).reduce((acc, cur) => acc + cur)

    return (
        <div>
            Yhteensä {yht}
        </div>
    )
}

const Kurssi = ({ kurssi }) => {
    const kurssit = kurssi.map(k => {
        return (
            <div key={k.nimi}>
                <Otsikko kurssi={k.nimi} />
                <Sisalto osat={k.osat} /><br/>
                <Yhteensa osat={k.osat} />
            </div>
        )
    })

    return kurssit
}

const App = () => {
    const kurssi = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
            osat: [
                { nimi: 'Reactin perusteet', tehtavia: 10, id: 1 },
                { nimi: 'Tiedonvälitys propseilla', tehtavia: 7, id: 2 },
                { nimi: 'Komponenttien tila', tehtavia: 14, id: 3 },
                { nimi: ' Redux', tehtavia: 7, id: 4 }
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                { nimi: 'Routing', tehtavia: 3, id: 1 },
                { nimi: 'Middlewaret', tehtavia: 7, id: 2 }
            ]
        }
    ]

    return (
        <div>
            <h1>Opetusohjelma</h1>
            <Kurssi kurssi={kurssi} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
