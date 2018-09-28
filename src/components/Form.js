import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City"/>
		<input type="text" name="country" placeholder="Country e.g. 'USA'"/>
		<button>Get Weather</button>
	</form>
);

export default Form;