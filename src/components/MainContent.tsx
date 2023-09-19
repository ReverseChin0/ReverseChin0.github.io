import { useState } from 'react';
import { MainNavbar } from './MainNavbar'; 
import './MainContent.css'
import ContentDisplayer  from './ContentDisplayer';
import { 
          EN_HomeCont as HomeCont,
          EN_AboutCont as AboutCont,
          EN_substanceCont as substanceCont,
          EN_modelGalryCont as modelGalryCont,
          EN_boxGalleryCont as boxGalleryCont,
          EN_futGalleryCont as futGalleryCont,
          EN_shadGalleryCont as shadGalleryCont,
          EN_experimGalleryCont as experimGalleryCont,
          EN_webContent as webContent,
       } from '../types/contents'
import TextImageDisplayer from './TextImageDisplayer';
import { NavLink } from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed ';

interface Props{
  currentSect:(arg:number)=>void;
}

export const MainContent: React.FC<Props> = ({currentSect}) => {

  const [CurrSection, setCurrSection] = useState(0);

  const updateCurrentSection = (currnt:number):void => {
    setCurrSection(currnt);
    currentSect(currnt);
    // console.log(currnt," parametro asignado a -> ",CurrSection);
  }

  const handleScroll = (elementId:string) => {
    const element = document.getElementById(elementId);
    if (element) {      
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <main>
        <MainNavbar 
            activeSection={CurrSection}
            scrollHandler={handleScroll}
        />

        <div className='spacer'/>
        
        <ContentDisplayer  
            title={HomeCont.title} 
            contents={HomeCont.contents}
            links={HomeCont.links} 
            alignType={'full'} //
            idsection={0}
            setSection={updateCurrentSection}            
        />

        <ContentDisplayer 
            title={AboutCont.title} 
            contents={AboutCont.contents}
            links={AboutCont.links} 
            images={AboutCont.images} 
            alignType={'full'}
            idsection={1}
            setSection={updateCurrentSection}
        />             

        <TextImageDisplayer
            title={webContent.title}
            introduction={webContent.introduction}
            contentGroups={webContent.contentGroups!}
            idsection={2}
            setSection={updateCurrentSection}
        />

        <ContentDisplayer
            title={futGalleryCont.title} 
            contents={futGalleryCont.contents}
            links={futGalleryCont.links}
            images={futGalleryCont.images} 
            alignType={'right'}
            idsection={3}
            setSection={updateCurrentSection}
        />

        <ContentDisplayer
            title={boxGalleryCont.title} 
            contents={boxGalleryCont.contents}
            images={boxGalleryCont.images} 
            alignType={'right'}
            idsection={4}
            setSection={updateCurrentSection}
        />

        <ContentDisplayer
            title={shadGalleryCont.title} 
            contents={shadGalleryCont.contents}
            images={shadGalleryCont.images} 
            alignType={'full'}
            idsection={5}
            setSection={updateCurrentSection}
        />

        <ContentDisplayer
            title={modelGalryCont.title} 
            contents={modelGalryCont.contents}
            images={modelGalryCont.images} 
            alignType={'left'}
            idsection={6}
            setSection={updateCurrentSection}
        />

        <ContentDisplayer
            title={substanceCont.title} 
            contents={substanceCont.contents}
            images={substanceCont.images} 
            alignType={'left'}
            idsection={7}
            setSection={updateCurrentSection}
        />
        
        <YoutubeEmbed title='Effects Made With Unreal' embedId='Zkmjuq6NkG8'/>

        <ContentDisplayer
            title={experimGalleryCont.title} 
            contents={experimGalleryCont.contents}
            images={experimGalleryCont.images} 
            alignType={'full'}
            idsection={8}
            setSection={updateCurrentSection}
        />
           
        <div className='lg-spacer'/>
        <NavLink to={'/privacyfutbol'}>Privacy</NavLink>
      </main>
    </>
  )
}
