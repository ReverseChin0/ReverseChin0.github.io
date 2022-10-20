import { useSelector } from "react-redux";
import { CardGallery } from "./CardGallery";

const basePath    = '/assets/images/';

const boxGallery = {
    imagePaths: [ basePath+'boxingCustomization/boxing_1.jpg',
                basePath+'boxingCustomization/boxing_2.jpg',
                basePath+'boxingCustomization/boxing_3.jpg'],
    titleES: 'Personalización Personajes',
    titleEN: 'Character Customization',
    desES: 'Este es un proyecto que estoy realizando para titularme, el objetivo era conseguir un alto nivel de personalización',
    desEN: 'This is a proyect that I am doing to get my degree, the main objective was to achieve a high level of customization'
}

const futGallery = {
    imagePaths: [ basePath+'futbol/futbol-1.jpg',
                basePath+'futbol/futbol-2.jpg',
                basePath+'futbol/futbol-3.jpg'],
    titleES: 'Fútbol Asertivo',
    titleEN: 'Asertive Football',
    desES: 'Un pequeño juego realizado para Familia Incluyente A.C. modelado y programado por mi',
    desEN: 'A small game made for Familia Incluyente A.C. modeled and programmed by me'
}

const subsDesGal = {
    imagePaths : [ basePath+'subDesign/subDesignMats_1.jpg',
                   basePath+'subDesign/subDesignMats_2.jpg'],
    title: 'Substance Designer',
    desES: 'Materiales hechos en substance designer, aqui aprendi cómo funcionan los materiales PBR en el workflow de metallic-roughness y specular-glossines',
    desEN: 'Materials made in substance designer, here i learned how PBR materials worked in the metallic-roughness and specular-glossines workflow'
}

const shadGallery = {
    imagePaths : [ basePath+'shaderVariety/ditherShader_0.jpg',
                    basePath+'shaderVariety/shadervariety_1.jpg',
                    basePath+'shaderVariety/shadervariety_2.jpg',
                    basePath+'shaderVariety/shadervariety_3.jpg'],
    title: 'Shaders',
    desES: 'Algunos Shaders que he hecho en la escuela y en mi tiempo libre :)',
    desEN: 'Some Shaders I made in school and in my free time :)'
}
                                        
const expeGallery = {
    imagePaths : [ basePath+'Experiments/spider.gif',
                    basePath+'Experiments/matrixProjection.jpg',
                    basePath+'Experiments/mesh-Deform.jpg',
                    basePath+'Experiments/customLighting.jpg'],
    titleES: 'Unos Experimentillos',
    titleEN: 'Some experiments',
    desES: 'Experimentos con shaders, meshes, inverse kinematics, etcétera',
    desEN: 'Experiments with shaders, meshs, inverse kinematics, etcetera'                
}

const modeGallery = {
    imagePaths : [ basePath + 'models/BattleAxe.png',
                   basePath + 'models/World.png', ],
    titleES: 'Modelado 3D',
    titleEN: '3D Modelling',
    desES: 'Modelos que he realizado',
    desEN: 'Models i´ve made'                
}


export const CardsGroup = () => {
  const spanish = useSelector((state) => state.states.spanish);

  return (
    <>
        <CardGallery 
        paths={ boxGallery.imagePaths } 
        title={spanish ? boxGallery.titleES : boxGallery.titleEN }
        description={spanish ? boxGallery.desES : boxGallery.desEN }
        />

        <CardGallery 
        paths={ futGallery.imagePaths } 
        title={spanish ? futGallery.titleES : futGallery.titleEN}
        description={spanish ? futGallery.desES : futGallery.desEN}
        />

        <CardGallery 
        paths={ subsDesGal.imagePaths } 
        title={subsDesGal.title}
        description={spanish ? subsDesGal.desES : subsDesGal.desEN}
        />

        <CardGallery 
        paths={shadGallery.imagePaths} 
        title={shadGallery.title}
        description={spanish ? shadGallery.desES : shadGallery.desEN}
        />

        <CardGallery 
        paths={expeGallery.imagePaths} 
        title={spanish ? expeGallery.titleES : expeGallery.titleEN}
        description={spanish ? expeGallery.desES : expeGallery.desEN}
        />

        <CardGallery
        paths={modeGallery.imagePaths}
        title={spanish ? modeGallery.titleES : modeGallery.titleEN}
        description={spanish ? modeGallery.desES : modeGallery.desEN}
        />
    </>
  )
}
