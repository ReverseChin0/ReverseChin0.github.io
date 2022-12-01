import { SingleViewContent } from "../components/SingleViewContent";
import { enData } from "../dataobjects/englishSite";

export const UtilsPage = () => {

  const {UtilsPageArticles} = enData.Articles;

  return (
    <>
      {
        UtilsPageArticles.map((article)=>(
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
