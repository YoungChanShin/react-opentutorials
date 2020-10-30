import Subject from "./components/Subject"
import Menu from "./components/Menu"
import Article from "./components/Article"

function App() {
  const title = "o0o"
  const content = "궁금궁금~"
  const articles = [
    {id : 1, title: "재성", content:"회사에 상사가 너무 힘들게 해"},
    {id : 2, title: "신님", content:"더 재미있는 거 가져와"},
    {id : 3, title: "민재", content:"더 멋지게 살고 싶어"},
  ]
  return (
    <div>
      <Subject title={title} content={content}></Subject>
      <Menu></Menu>
      <Article article={articles}></Article>
    </div>
  );
}

export default App;
