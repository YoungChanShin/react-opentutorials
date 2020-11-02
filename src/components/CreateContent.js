import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      console.log('Content render');
      return (
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="POST"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.desc.value)
            }.bind(this)}>
              {/* 여기 있는 onSubmit은 html form의 고유한 속성이다. */}
              <p><input type="text" name="title" placeholder="title"></input></p>
              <p><textarea type="desc" name="desc" placeholder="desc"></textarea></p>
              <p><input type="submit"></input></p>
            </form>
        </article>
      );
    }
  }

export default CreateContent;