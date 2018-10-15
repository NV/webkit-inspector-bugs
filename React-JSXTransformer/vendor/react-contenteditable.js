/**
 * @jsx React.DOM
 */

var ContentEditable = React.createClass({
    render: function() {
        return <div
            onInput={this.emitChange}
            onBlur={this.emitChange}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}
        />;
    },

    shouldComponentUpdate: function(nextProps) {
        return nextProps.html !== this.getDOMNode().innerHTML;
    },

    componentDidUpdate: function() {
        if ( this.props.html !== this.getDOMNode().innerHTML ) {
            this.getDOMNode().innerHTML = this.props.html;
        }
    },

    emitChange: function(evt) {
        var html = this.getDOMNode().innerHTML;
        if (this.props.onChange && html !== this.lastText) {
            evt.target = {value: html};
            this.props.onChange(evt);
        }
        this.lastText = html;
    }
});
