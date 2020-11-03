import React, { Component } from 'react';

class TOC extends Component{
  shouldComponentUpdate(newProps){
    return newProps.data!==this.props.data // 원본을 보존하는 경우에만 사용할 수 있다.
  }
    render(){
      console.log('====>TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{data[i].title}</a>
          </li>);
        i = i + 1;
      }
      return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
      );
    }
  }

export default TOC;