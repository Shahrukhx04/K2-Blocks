import './Color-Picker.scss';
import ReactDOM from 'react-dom';


class Color_Picker extends React.Component {

		//standard constructor for a component
		constructor() {
			super(...arguments);
			console.log(this.props.name, ": constructor()");

			// example how to bind `this` to the current component for our callbacks
			this.onChangeContent = this.onChangeContent.bind(this);

			// some place for your state
			this.state = {};
		}

		componentDidMount() {
			console.log(this.props.name, ": componentDidMount()");
		}

		componentDidUpdate() {
			console.log(this.props.name, ": componentDidUpdate()");
		}


		componentWillUnmount() {
			console.log(this.props.name, ": componentWillUnmount()");
		}

		// update attributes when content is updated
		onChangeContent(data) {
			// set attribute the react way
			this.props.setAttributes({ content: data });
		}

		// edit: function (props) {
		// Creates a <p class='wp-block-cgb-block-react-lifecycle-block'></p>.
		render() {
			return (
				<div>
					<p>This is Component</p>
				</div>
			);
		}
}
export default Color_Picker;

ReactDOM.render(<Color_Picker/>, document.getElementById('Color_Picker_Component'));
