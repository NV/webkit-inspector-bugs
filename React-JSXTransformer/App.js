var App = React.createClass({

	render: function() {
		nope++;
		return <div>It loaded!</div>;
	}

});

React.renderComponent(
	<App/>,
	document.getElementById('app')
);
