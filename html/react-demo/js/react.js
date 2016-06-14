
var Title = React.createClass({
    render: function() {
        return (
            <div className="title">
                <h1>{this.props.value}</h1>
            </div>
        );
    }
});
        
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
        
        this.setState(
            {
                comment: ''
            }
        );
    },

    
    render: function() {
        return (
            <div className="commentBox">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.comment} onChange={this.handleChange} /><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
});
            
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

var MainContainer = React.createClass({

    getInitialState: function() {
        return {
            commentList: this.props.comments
        };
    },
    
    handleCommentSubmit: function(commentObj) {
        // nos llega el comentario del que se ha hecho submit
        var comment = commentObj.comment;
        
        // Aquí llamaríamos al servidor por Ajax y al finalizar actualizaríamos
        // el estado. Lo que también se puede hacer es actualizar la lista
        // primero y esperar a que la llamada Ajax actualice después el estado
        // para hacerlo más responsive
        // De momento actualizamos el estado y no llamamos a Ajax
        var newCommentList = this.state.commentList.concat([comment]);
        this.setState({commentList: newCommentList});
    },
    
    render: function() {
        return (
            <div className="mainContainer">
                <Title value="Título" />
                <CommentBox initialComment="" onCommentSubmit={this.handleCommentSubmit}/>
                <ItemsList items={this.state.commentList} />
            </div>
           );
   } 
});

ReactDOM.render(
    <MainContainer comments={['Comentario 1', 'Comentario 2']}/>,
    document.getElementById('content')
);
