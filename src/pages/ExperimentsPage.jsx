import { SingleViewContent } from "../components/SingleViewContent";
import { enData } from "../dataobjects/englishSite";

export const ExperimentsPage = () => {

  const {ExperimentsPageArticles} = enData.Articles;
  
  return (
    <>
      {
        ExperimentsPageArticles.map((article)=>(
          <SingleViewContent 
              key={article.articleTitle+"id"}  
              title={article.articleTitle} 
              description={article.description} 
              images={article.imagePaths}
              urlLinks={article.urlLinks}
          />
        ))
      }
    </>
  )
}