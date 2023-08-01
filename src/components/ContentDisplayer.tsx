import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faGooglePlay, faItchIo, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

interface linkContent{
  title:string;
  link:string;
  icon?:string;
}

interface images{
  image:string,
  image_sm:string
}

interface Props{
  title: string
  contents?: string[]
  links?: linkContent[]
  images?: images[]
  alignType?: string;
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
              </div>); 
    }
  );

   return <div className="gallery">{imagesload}</div> 
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

// export const ContentDisplayer = (content:BaseContent, alignType?:number) => {
const ContentDisplayer: React.FC<Props> = ({
  title,
  contents,
  links,
  images,
  alignType= 'full',
  setSection,
  idsection= 0
  }) => {

  const handleOnView = (inview:boolean):void => {
    if(inview)
      setSection?.(idsection)      
  }

  const { ref, inView } = useInView({onChange:handleOnView});

  const alignClass = alignType == 'left'  ? 'alignLeft' : 
                     alignType == 'right' ? 'alignRight' 
                                          : 'full'; 

  const Gallery = createGallery(images);
                                    
  return (
    <>
      <section id={title} ref={ref} className={`gridsection ${inView?'inView':''}`}>
        <div className={`contentCard ${alignClass}`}>
          <h1>{title}</h1>

          {contents?.map((content,index)=>{
            return <p key={index}>{content}</p>
          })}

          <div className='linkflex'>
            {
              links?.map( (link,index) =>
              {
                return  <a key={index} href={link.link} target='_blank'> 
                          {chooseIcon(link.icon)} {link.title}                      
                        </a>                                      
              })
            }
          </div>
          

          {/* {images?.map((image,index)=>{
            return <img key={index} src={image} alt="no image found" />
          })} */}

          {Gallery}

        </div>            
      </section>      
    </>
  )
}

export default ContentDisplayer;
