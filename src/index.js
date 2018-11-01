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
    return (
        <div>
            <Osa osa={osat[0]} />
            <Osa osa={osat[1]} />
            <Osa osa={osat[2]} />
        </div>
    )
}

const Yhteensa = ({ osat }) => {
    let yht = 0
    osat.map(osa => {
        return yht += osa.tehtavia
    })

    return (
        <div>
            Yhteensä {yht}
        </div>
    )
}

const App = () => {
    const kurssi = {
        otsikko: 'Half Stack -sovelluskehitys',
        osat: [{ nimi: 'Reactin perusteet', tehtavia: 10 },
        { nimi: 'Tiedonvälitys propseilla', tehtavia: 7 },
        { nimi: 'Komponenttien tila', tehtavia: 14 }
        ]
    }

    return (
        <div>
            <Otsikko kurssi={kurssi.otsikko} />
            <Sisalto osat={kurssi.osat} /> <br/>
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
