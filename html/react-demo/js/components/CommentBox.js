import React from 'react';

var CommentBox = React.createClass({
    
    getInitialState: function() {
        return {
            comment: this.props.initialComment
        };
    },
    
    handleChange: function(e) {
        this.setState({
          comment: e.target.value
        });
    },

    handleSubmit: function(e) {
        e.preventDefault(); //Impedimos el submit
        
        // Llamamos a la función del commentBox que nos han pasado como manejadora del submit
        this.props.onCommentSubmit({
          comment: this.state.comment
        });
        
        this.setState({
            comment: ''
        })
    },

    
    render: function() {
        return (
            <div className="commentBox">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.comment} onChange={this.handleChange} /><br/>
                    <input type="submit" value="Enviar comentario" />
                </form>
            </div>
        );
    }
});

export default CommentBox;