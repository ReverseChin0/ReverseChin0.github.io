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
          urlLinks={AboutPageArticles[0].urlLinks}
        />

        <section>
          <div className="single-view-grid">
            <div className="single-text-grid">
              <div className="gradient"/>
                <br/>
                  <ul className="check-list">
                    <li><a href="mailto:frank.castaneda.g@gmail.com">Email me to: frank.castaneda.g@gmail.com</a></li>          
                    <li><a href="www.linkedin.com/in/francisco-emmanuel-castañeda-lópez-550b07251">LinkedIn</a></li>    
                    <li><a href="https://reversechin0.itch.io/ ">Itch.io</a></li>                             
                  </ul>
                <br/>
            </div>
          </div>
        </section>

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
