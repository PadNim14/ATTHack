import React, { useState } from 'react';

function Quiz() {

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);	

	const [score, setScore] = useState(0);
	const [counter, setCounter] = React.useState(5);
	const id = React.useRef(null);
	const [PP, setPP] = useState(0);

	const clear=()=>{
		window.clearInterval(id.current);
	}
	

	React.useEffect(() => {
		const timer =
		  counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		  if(counter === 0)
		  {
			const nextQuestion = currentQuestion + 1;
			if(nextQuestion < questions.length){
				setCurrentQuestion(nextQuestion);
				setCounter(counter + 5);
			}
			else{
				setShowScore(true);
			}
			
		  }
		 
		return () => clearInterval(timer);

		


	  }, [counter]);


	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect){
			setScore(score + 1);
			setPP(PP + 1);
			setCounter(5);
		}
		
		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
			setCounter(5);
		}
		else{
			setShowScore(true);
			setCounter(0);
		}
		//setCounter(5);
	};
	
	console.log(questions[currentQuestion]);
	return (
		<div className='app'>
			<div className='PPcounter'><p> Current PP: {PP}</p></div>
	  		<div className='timer-text'>Time Left {counter}</div>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{currentQuestion + 1}</span>/{questions.length}
						</div>
						
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			
		</div>
	);
}
export default Quiz;
