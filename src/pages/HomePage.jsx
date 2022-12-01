import { GalleryComponent } from "../components/GalleryComponent"
import { SingleViewContent } from "../components/SingleViewContent"
import { enData } from "../dataobjects/englishSite";

export const HomePage = () => {

  let pathsArr = []

  Object.entries(enData.Articles).forEach(arr => {
    if(arr[0]!="AboutPageArticles"){
      arr[1].forEach(pathArr => {
        pathArr.imagePaths.map((path)=>{
           if(!!path == true && path != "") pathsArr = [ ...pathsArr, path ]
        })
      });
    }    
  });
  // console.log(pathsArr);
  return (
    <>
      <SingleViewContent 
        title={"Hello"} 
        description={"Feel free to explore the page and see if you like something 😁"} />
      <GalleryComponent paths={pathsArr}/>
    </>
  )
}
