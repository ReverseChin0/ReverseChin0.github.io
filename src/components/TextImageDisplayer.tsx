
import { faGithubAlt, faGooglePlay, faItchIo, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';

interface contentGroups{
  contentTitle:string;
  content:string;
  link?:string;
  linkTitle?:string;
  icon?:string;
  images:images[];
}

interface images{
  image:string,
  image_sm:string
}

interface ImageTextContent{
  title: string;
  introduction: string;
  contentGroups:contentGroups[];
  setSection?:(arg:number)=>void; //callback del padre
  idsection: number;
}

function openImage(route:string){
  window.open(route);
}

function createGallery(routesToImages?:images[]){
  if(routesToImages == null || routesToImages == undefined)
  return;

  const imagesload = routesToImages?.map( (img,index) => 
    {
      return (
              <div 
                  style={{backgroundImage:`url(${img.image_sm})`}} 
                  key={index}
              > 
                <img 
                  loading='lazy' 
                  onClick={() => openImage(img.image)}                   
                  src={img.image} 
                  alt="no image found" 
                />
              </div>
      )       
    }
  );

  return <div className="gallerySmall">{imagesload}</div> 
}

function chooseIcon(iconType:string | undefined) {
  if(!iconType)
    iconType='';  

  switch(iconType){

    case 'faLinkedinIn': return <FontAwesomeIcon icon={faLinkedinIn} bounce/>;
    case 'faGooglePlay': return <FontAwesomeIcon icon={faGooglePlay} bounce/>;                      
    case 'faGithubAlt':  return <FontAwesomeIcon icon={faGithubAlt}  bounce/>;
    case 'faEnvelope':   return <FontAwesomeIcon icon={faEnvelope}   bounce/>;
    case 'faYoutube':    return <FontAwesomeIcon icon={faYoutube}    bounce/>;
    case 'faItchIo':     return <FontAwesomeIcon icon={faItchIo}     bounce/>;

    default:  return <FontAwesomeIcon icon={faGlobe}      bounce />;
  }                                                                                                       
}

const TextImageDisplayer: React.FC<ImageTextContent> = ({ 
  title,
  introduction, 
  contentGroups, 
  setSection, idsection=0 }) => {

  const handleOnView = (inview:boolean):void => {
    if(inview)
      setSection?.(idsection)      
  }

  // const { ref, inView, entry } = useInView({onChange:handleOnView});
  const { ref, inView } = useInView({onChange:handleOnView});
                                    
  return (
    <>
      <section id={title} ref={ref} className={`gridsection ${inView?'inView':''}`}>
        <div className={`contentCard full`}>
          <h1>{title}</h1>

          {<p>{introduction}</p>}

          {
            contentGroups?.map((contGroup,index)=>{
              const gallery = createGallery(contGroup.images)
              return (
                
                <div key={`${contGroup.contentTitle}${index}`}>
                  <hr />
                  <br />
                  {gallery}
                  <h3>{contGroup.contentTitle}</h3>
                  <p>{contGroup.content}</p>
                  <div className='linkflex'>
                    <a href={contGroup.link} target='_blank'>{chooseIcon(contGroup.icon)} {contGroup.linkTitle}</a>
                  </div>
                  <div className='spacer'></div>                  
                </div>                                  
              )
            })
          }

        </div>            
      </section>      
    </>
  )
}

export default TextImageDisplayer;
