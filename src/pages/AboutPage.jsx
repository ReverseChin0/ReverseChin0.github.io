import { SingleViewContent } from "../components/SingleViewContent";
import { enData } from "../dataobjects/englishSite";

export const AboutPage = () => {

  const {AboutPageArticles} = enData.Articles;

  return (
    <>
      
        {/* // AboutPageArticles.map((article)=>(
        //   <SingleViewContent 
        //       key={article.articleTitle+"id"} 
        //       title={article.articleTitle} 
        //       description={article.description} 
        //       images={article.imagePaths}/>
        // ))
         */}
        <SingleViewContent 
          key={1}
          title={AboutPageArticles[0].articleTitle} 
          description={AboutPageArticles[0].description} 
          images={[AboutPageArticles[0].imagePaths[2]]}
        />

        <SingleViewContent
          key={2}
          images={[
            AboutPageArticles[0].imagePaths[0],
            AboutPageArticles[0].imagePaths[1],
            AboutPageArticles[0].imagePaths[3]
          ]}
        />
      
    </>
  )
}
