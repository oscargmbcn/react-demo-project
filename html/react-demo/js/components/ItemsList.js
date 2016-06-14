import React from 'react';

var ItemsList = React.createClass({
   render: function() {
        var itemsLi = this.props.items.map(function(a){
            return <li>{a}</li>;
        });
        
        return (
            <div className="commentList">
                <ul>{ itemsLi }</ul>
            </div>
        );
   } 
});

export default ItemsList;
