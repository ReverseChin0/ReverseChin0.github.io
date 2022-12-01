import { SingleViewContent } from "../components/SingleViewContent";
import { enData } from "../dataobjects/englishSite";

export const ModelPage = () => {

  const {ModelPageArticles} = enData.Articles;

  return (
    <>
      {
        ModelPageArticles.map((article)=>(
          <SingleViewContent 
              key={article.articleTitle+"id"} 
              title={article.articleTitle} 
              description={article.description} 
              images={article.imagePaths}/>
        ))
      }
    </>
  )
}
