import React, { Component } from 'react';

class UpdateContent extends Component{
  constructor(props){
    super(props)
    this.state={
      title : this.props.data.title,
      desc : this.props.data.desc,
      id : this.props.data.id
    }
    this.valueHandle = this.valueHandle.bind(this) //render 함수부분에서 valueHandle에서 bind를 해주지 않아도 괜찮은 효과가 발생한다.
  }
  valueHandle(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
    render(){
      return (
        <article>
            <h2>Update</h2>
            <form action="/create_process" method="POST"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(this.state.id, this.state.title, this.state.desc)
            }.bind(this)}>
              <p><input
              type="text"
              name="title" 
              placeholder="title"
              value={this.state.title}
              onChange={this.valueHandle}
              ></input></p>

              <p><textarea 
              type="desc" 
              name="desc" 
              placeholder="desc"
              value={this.state.desc}
              onChange={this.valueHandle}

              ></textarea></p>
              <p><input type="submit"></input></p>
            </form>
        </article>
      );
    }
  }

export default UpdateContent;