import { useContext } from "react";
// npm install react-switch
import Switch from "react-switch";
import { Context } from "../../ContextProvider";

export default function Toggle(props) {
	const { accentColor, primaryColor } = useContext(Context);

	const handleChange = (nextChecked) => {
		props.setValue(nextChecked);
	};

	return (
		<div>
		  <p>{props.text}</p>
		  <Switch
			onChange={handleChange}
			checked={props.value}
			uncheckedIcon={false}
			checkedIcon={false}
			offColor={accentColor}
			onColor={accentColor}
			offHandleColor={primaryColor}
			onHandleColor={primaryColor}
		  />
		</div>
	  );
}

/* 
The handleChange function is called every time the state of the toggle changes (for example, 
when a user clicks on the toggle to switch it from on to off, or vice versa). 
Inside the handleChange function, props.setValue(nextChecked) is called.
This means that the Toggle communicates to its parent component that the state of the toggle
has changed, passing the new state (nextChecked) to the parent through a setValue function provided 
as a prop.
The primary role of this code snippet is to create a component that, 
when it interacts with the user (the toggle state changes), 
notifies this change to its parent component through a callback (setValue). */
