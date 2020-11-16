function Article(props){
    const n = props.article.length
    let article_list = []
    
    // for(let i=0 ;i<n;i++){
    //     article_list.push("<li>"+props.article[i].id+props.article[i].title+props.article[i].content+"</li>")
    // }
    // console.log(article_list)

    let i = 0
    while (i<n) {
        article_list.push(<li key = {props.article[i].id}>{props.article[i].title} : {props.article[i].content}</li>)
        i += 1
    }
    return (
        <article>
            <ul>
                {article_list}
            </ul>
        </article>
    )
}
export default Article