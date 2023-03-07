import { useState } from "react";
import Input from "./input/Input";

function App() {
  const [text, setText] = useState(150);
  const [curs, setCurs] = useState(16.35);
  const [poln, setPoln] = useState(0);
  const [day, setDay] = useState(20);
  const [chas, setChas] = useState(0);
  const [chasOstatok, setChasOstatok] = useState(0);

  function rubl() {
    return Math.round(text * curs * 100) / 100;
  }
  function resulChas() {
    return poln * chas + chasOstatok;
  }

  function chasRubl() {
    return Math.round((rubl() / (day * 8)) * 100) / 100;
  }

  return (
    <div className="App">
      <div className="Apps">
        <h1 className="hedrs">Подсчет ЗП</h1>

        <div className="zp">
          <h3>Количество дней в месяце</h3>
          <Input value={day} setValue={setDay} type="number" />
        </div>
        <div className="zp">
          <h3>Курс рубля к доллару</h3>
          <Input value={curs} setValue={setCurs} type="number" />
        </div>
        <div className="zp">
          <h3>Введите вашу ЗП в $ </h3>
          <Input value={text} setValue={setText} type="number" />
          <h3> в рублях {rubl()}</h3>
        </div>
        <div className="zp">
          <h3>Введите количество полных дней</h3>
          <Input value={poln} setValue={setPoln} type="number" />
          <h3>по</h3>
          <Input value={chas} setValue={setChas} type="number" />
          <h3>часов</h3>
        </div>
        <div className="zp">
          <h3>Введите оставшиеся часы</h3>
          <Input value={chasOstatok} setValue={setChasOstatok} type="number" />
        </div>
        <div className="zp">
          <h3>
            Вы отработали {resulChas()} часов по {chasRubl()} рублея в час
          </h3>
        </div>
        <div className="zp">
          <h3>
            Вы плучите {Math.round(chasRubl() * resulChas() * 100) / 100} рублей
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
