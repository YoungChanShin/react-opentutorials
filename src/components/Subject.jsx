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

export default Subject