import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Subject from "./components/Subject"
import Control from "./components/Control"
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3 
    // 이 값을 state에 넣지 않는 이유는 UI에 아무 영향도 주지 않기 때문이다.
    // state에 너무 많은 값이 들어 있으면 다시 렌더링 되면서 쓸데없이 렌더링이 발생한다.
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  getContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data
        }
        i = i + 1;
      }
    return data
  }
  getArticle(){
    var _title, _desc,_article = null;
    if(this.state.mode ===  'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      const data = this.getContent()
      console.log("data", data)
      _article = <ReadContent title={data.title} desc={data.desc}></ReadContent>
      
    } else if (this.state.mode ==="create"){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // console.log(this.max_content_id)
        this.max_content_id = this.max_content_id+1;
        // this.state.contents.push(
        //   {id:this.max_content_id, title: _title, desc: _desc}
        // )
        const _content = this.state.contents.concat({
          id:this.max_content_id, title: _title, desc: _desc
        })
        // 원본데이터를 바꾸지 않는 concat이 성능상 우위에 있다
        this.setState({
          contents: _content,
          mode:"read",
          selected_content_id : this.max_content_id
        })
      }.bind(this)}></CreateContent>
    }else if (this.state.mode ==="update"){
      const _content = this.getContent()
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
        console.log(_id, _title, _desc)
        let i =0
        const _contents = Array.from(this.state.contents)
        while(i<_contents.length){
          if (_contents[i].id === _id){
            _contents[i] = {
              id: _id,
              title : _title,
              desc : _desc,
            }
            break
          }
          i+=1
        }
        this.setState({
          contents: _contents,
          mode: "read",
        })
      }.bind(this)}></UpdateContent>
    }
    
    return _article
  }
  render() {
    console.log('App render');
    const _article = this.getArticle()
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'}); // 이렇게 데이터 타입 자체가 immutable하면 원본 보존을 고려할 필요없이 원본 보존이 안 된다.
          }.bind(this)}
        >
        </Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
        
      </div>
    );
  }
}

export default App;
