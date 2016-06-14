import React from 'react';

var Title = React.createClass({
    render: function() {
        return (
            <div className="title">
                <h1>{this.props.value}</h1>
            </div>
        );
    }
});

export default Title;