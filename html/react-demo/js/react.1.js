import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import CommentBox from './components/CommentBox';
import ItemsList from './components/ItemsList';

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
