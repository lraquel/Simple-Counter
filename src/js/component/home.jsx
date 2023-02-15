import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="contenedor">
			<div className="icono">
				<i className="far fa-clock"></i>
			</div>

			<div className="four">{props.dig4  %10}</div>
			<div className="three">{props.dig3  %10}</div>
			<div className="two">{props.dig2  %10}</div>
			<div className="one">{props.dig1 %10}</div>
			
		</div>
	);
};

export default Home;
