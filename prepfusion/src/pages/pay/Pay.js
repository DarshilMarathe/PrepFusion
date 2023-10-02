import axios from "axios";
import { useState } from "react";
import './Pay.css'
import { useNavigate } from "react-router-dom";

function Pay() {
	const navigate = useNavigate();
	const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});

	const initPayment = (data) => {
        console.log("In init")
		const options = {
			key: "rzp_test_zkRk5Km3mrtYWp",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:5000/payment/verify";
					const { data } = await axios.post(verifyUrl, response, {
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
							'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
						},
					});
					console.log(data);
					if(data.status){
						alert("Purchased PrepPro Succesfully");
						// navigate("") --> to a page to show order and pay id 
						navigate("/user")
					}
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};

		console.log(options)
		const rzp1 = new window.Razorpay(options);


		rzp1.open();
	};

	const handlePayment = async () => {
		try {

			if(!localStorage.getItem("token")){
				alert("You have not logged in.");
				return navigate("/login");
			}
            // console.log("Hanlde")
			const orderUrl = "http://localhost:5000/payment/orders";
			const { data } = await axios.post(
				orderUrl,
				{ amount: book.price },
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
						'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
					},
				}
			);
            console.log("2nd")
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
	<>
		<div className="App">
			{/* Complete GET PREMIUM PAGE  -- integrate pay here*/}
			<div className="book_container">
				<img src={book.img} alt="book_img" className="book_img" />
				<p className="book_name">{book.name}</p>
				<p className="book_author">By {book.author}</p>
				<p className="book_price">
					Price : <span>&#x20B9; {book.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
		</div>
	</>
		
	);
}

export default Pay;
