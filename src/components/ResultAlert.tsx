import React from 'react';


interface IProps {
    score: number,
    setScore(value: number): void,
    setShowResultAlert(value: boolean): void,
    setInputValue(value: string): void
}

const ResultAlert: React.FC<IProps> = ({ score, setScore, setInputValue, setShowResultAlert }) => {

    const handleNewGame = () => {
        setShowResultAlert(false);
        setScore(0);
        setInputValue('')
    }

    return (
        <div className='result-alert'>
            <h2 className='result-alert__title title'>{`Время вышло, игра закончена. Ваш счет: ${score}`}</h2>
            <button onClick={handleNewGame} className='result-alert__button button'>Попробовать снова</button>
        </div>
    )
}

export default ResultAlert; 
