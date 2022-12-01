import { SingleViewContent } from "../components/SingleViewContent";
import { enData } from "../dataobjects/englishSite";

export const WebsitesPage = () => {

  const {WebPageArticles} = enData.Articles;

  return (
    <>
      {
        WebPageArticles.map((article)=>(
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
