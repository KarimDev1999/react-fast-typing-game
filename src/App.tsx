import React, { useEffect, useState } from 'react';
import Timer from './components/Timer';
import ResultAlert from './components/ResultAlert';
import axios from 'axios';
import './scss/app.scss';



const App: React.FC = () => {
  const [quote, setQuote] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [showResultAlert, setShowResultAlert] = useState<boolean>(false);
  const [startGame, setStartGame] = useState<boolean>(false);


  useEffect(() => {
    axios.get('https://fish-text.ru/get?format=json&number=1').then(({ data }) => {
      setQuote(data.text.split(''));
    })
  }, [score]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    let value = e.target.value;
    setInputValue(value);
    if (value === quote.join('') && quote.length > 0) {
      setInputValue('');
      setScore(score + 1);
    }
  }



  return (
    <div className='app'>

      {
        showResultAlert ? <ResultAlert setInputValue={setInputValue} setScore={setScore} score={score} setShowResultAlert={setShowResultAlert} />
          :
          <>
            <h1 className='title'>Fast typing game</h1>
            <Timer setStartGame={setStartGame} setShowResultAlert={setShowResultAlert} />
          </>
      }


      {
        !showResultAlert && startGame ?
          <>
            <h2 className='score title'>Счет: {score}</h2>
            <div className='content'>
              <div className="content__top">
                {
                  quote.map((el, i) => {
                    let color;
                    if (i < inputValue.length) {
                      color = el === inputValue[i] ? 'correct' : 'incorrect';
                    }
                    return <span key={i} className={color}>{`${el}`}</span>
                  })
                }
              </div>
              <div className="content__bottoom">
                <textarea value={inputValue} onChange={handleChange} className="content__bottom-input"></textarea>
              </div>
            </div>
          </>
          : null
      }
    </div>
  );
}

export default App;
