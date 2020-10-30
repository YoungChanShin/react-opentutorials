# React Component

## 리액트가 없다면

리액트를 **우선**(우선이다) 코드 정리 도구로 사용한다. 컴포넌트 개념이 없다면 모든 코드를 하나의 컴포넌트에 몰아넣게 되어 재사용성 및 유지보수이 어렵고, 가독성이 낮다.



```react
// App.js

function Subject() {
  return (
    <header>
      <h1>logo</h1>
      너는 지금 거짓말을 하고 있다
    </header>
  )
}

function Menu(){
  return (
    <nav>
      <a href="#">거짓말인지 알아보기</a> | 
      <a href="#"> 옛날에 했던 거짓말</a>
    </nav>
  )
}

function App() { 
  return (
    <div>
      <Subject></Subject>
      <Menu></Menu>
    </div>
  );
}

export default App;
```

## props 

상위 컴포넌트에서 하위컴포넌트로 속성을 전달할 수 있어서 컴포넌트를 더욱 자유롭게 사용할 수 있다.

```react
function Subject(props) {
  return (
    <header>
      <h1>logo</h1>
      너는 지금 거짓말을 하고 있다
      <hr></hr>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <hr></hr>
    </header>
  )
}

function Menu(){
  return (
    <nav>
      <a href="#">거짓말인지 알아보기</a> | 
      <a href="#"> 옛날에 했던 거짓말</a>
    </nav>
  )
}

function App() { 
  return (
    <div>
      <Subject title="0o0" content="궁금궁금"></Subject>
      <Menu></Menu>
    </div>
  );
}

export default App;
```

## JSX

확장자를 `JSX`로 설정했기 때문에 return문 안에 `<`를 문자열이 아닌 의미가 있는 태그의 시작으로 인식할 수 있다고 한다. 

---

질문 

함수를 react컴포넌트로 만들어 주는 것이 `react`패키지의 기능이다. 이 패키지는 `index.js`에서 가져오는데 이는 어떻게 가져올 수 있는 걸까??