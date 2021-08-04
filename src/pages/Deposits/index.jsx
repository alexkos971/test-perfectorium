import React,  { useState, useEffect } from "react";
import WhiteBlock from "../../components/WhiteBlock";
import Button from "../../components/Button";

import Pagination from "../../components/Pagination";

import "./Deposits.scss"

const Deposits = () => {
	const cards = ['Check', 'Wire transfer'];
	const [ card, setCard ] = useState(cards[0]);

	const [form, setForm] = useState({
		amount: '', email: ''
	});

	const [currentList, setCurrentList] = useState(1)
	const itemPer = 6;


	// this data will come from the server
	const data = [
	{
		'date': '15/10/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$100'
	}, {
		'date': '1/9/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$200'
	}, {
		'date': '4/8/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$600'
	}, {
		'date': '23/7/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$100'
	}, {
		'date': '18/12/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$500'
	}, {
		'date': '13/12/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$700'
	}, {
		'date': '13/3/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$320'
	}, {
		'date': '1/12/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$800'
	}, {
		'date': '2/12/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$700'
	}, {
		'date': '3/3/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$320'
	}, {
		'date': '8/12/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$800'
	}, {
		'date': '3/12/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$500'
	}, {
		'date': '4/12/2009',
		'type': 'Lorem ipsum dolor',
		"amount": '$700'
	}, {
		'date': '5/3/2009',
		'type': 'Lorem ipsum dolor',
		"amount": '$320'
	}, {
		'date': '6/12/2021',
		'type': 'Lorem ipsum dolor',
		"amount": '$800'
	}, {
		'date': '8/12/2021',
		'type': 'Lorem ipsum dolor',
		"amount": '$700'
	}, {
		'date': '12/3/2021',
		'type': 'Lorem ipsum dolor',
		"amount": '$320'
	}, {
		'date': '18/12/2019',
		'type': 'Lorem ipsum dolor',
		"amount": '$800'
	}, {
		'date': '2/3/2021',
		'type': 'Lorem ipsum dolor',
		"amount": '$320'
	}, {
		'date': '30/12/2021',
		'type': 'Lorem ipsum dolor',
		"amount": '$800'
	}];

	const indexOfLastItem = currentList * itemPer;
	const indexOfFirstItem = indexOfLastItem  - itemPer;
	const current = data.slice(indexOfFirstItem, indexOfLastItem)


	const handleChange = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
	}

	const submit = () => {
		if (!form.amount.length) {
			alert('Поле amont пустрое');
			return;
		}
		else if (!Number(form.amount)) {
			alert('Заполните корректно поле amount');
			return;
		}
		else if (!form.email.length) {
			alert('Поле email пустрое');
			return;
		}
		else if (!form.account) {
			alert('Выберите поле account');
			return;
		} 
		alert('Успешно')
	}

	const paginate = vector => {
		if (vector === 'next' && currentList !== Math.ceil(data.length / itemPer)) {
			setCurrentList(currentList + 1);
		}
		else if (vector === 'prev' && currentList >= 2) {
			setCurrentList(currentList - 1);
		}
		else if (vector === 'last') {
			setCurrentList(Math.ceil(data.length / itemPer))
		}
	}

	useEffect(() => {
		console.log(form)
	}, [form])

	return (
		<div className="app-deposits">
			<h2 className="subtitle">DEPOSITS</h2>

			<div className="app-deposits-container">
				
				<WhiteBlock>
					<div className="app-deposits-triggers">
						{cards.map(item => 
							<span key={item} onClick={() => setCard((item === cards[0]) ? cards[0] : cards[1])} className={`app-deposits-triggers-item ${item !== card ? (item === cards[0] ? 'r' : 'l') : ''}`}>{item}</span>
						)}
					</div>
	
	
					{card === cards[0] ? 
						(<div className="app-deposits-check">
							<div className="app-deposits-check-fields">
	
								<div className="app-deposits-check-fields-input">
									<span>Amount</span>
									<input type="text" name="amount" placeholder="1000" onChange={handleChange}/>
								</div>
	
								<div className="app-deposits-check-fields-input">
									<span>E-mail</span>
									<input type="text" name="email" placeholder="E-mail" onChange={handleChange}/>
								</div>
							</div>
							
							<div className="app-deposits-check-radio">
	
								<div className="app-deposits-check-radio-item">
									<input type="radio" name="account" value="individual" onChange={handleChange}/>
									<span>Individual Account</span>
								</div>
								
								<div className="app-deposits-check-radio-item">
									<input type="radio" name="account" value="join" onChange={handleChange}/>
									<span>Join Account</span>
								</div>
							</div>
	
							<Button text={'Next'} className="app-deposits-check-btn" onClick={submit}/>
						</div> 
						) : (
							<div></div>
						)
					}
				</WhiteBlock>

				<WhiteBlock>
					<div className="app-deposits-header">
						<span>Date</span>
						<span>Type</span>
						<span>Amount</span>
					</div>

					<ul className="app-deposits-list">
						{data &&
							current.map((item, index) => (
							// (index <=6) && (
								<li className="app-deposits-list-item" key={index}>
									<span>{item.date}</span>
									<span>{item.type}</span>
									<span>{item.amount}</span>
								</li>
								// )
							))
						}
					</ul>

					<Pagination className="app-deposits-pagination" paginate={paginate}/>
				</WhiteBlock>
			</div>
		</div>
	)
}

export default Deposits;