import { SingleViewContent } from "../components/SingleViewContent";
import { enData } from "../dataobjects/englishSite";

export const MaterialPage = () => {

  const {MatPageArticles} = enData.Articles;

  return (
    <>
      {
        MatPageArticles.map((article)=>(
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
