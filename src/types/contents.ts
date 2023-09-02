interface linkContent{
  title:string;
  link:string;
  icon?:string;
}

interface images{
  image:string,
  image_sm:string
}

interface contentGroups{
  contentTitle:string;
  content:string;
  link?:string;
  linkTitle?:string;
  icon?:string;
  images:images[];
}

interface BaseContent {

  title: string;
  contents?: string[];
  links?: linkContent[];
  images?: images[];
}

interface ImageTextContent{
  title: string;
  introduction: string;
  contentGroups?:contentGroups[];
}

const basePath = '/images/';

export const ES_HomeCont:BaseContent = { //ya
  title:'¡Bienvenido!',
  contents: ['Sientete libre de explorar la página y encontrar algo que te interese ✌🏽'],
  links: [],  
  images:[]
}

export const EN_HomeCont:BaseContent = { //ya
  title:'¡Welcome!',
  contents: ['Feel free to browse the site and find something that interests you. ✌🏽'],
  links: [],  
  images:[]
}

export const ES_AboutCont:BaseContent = { //ya
  title: '¡Hola!',
  contents: [ 'Me llamo Francisco Emmanuel Castañeda López pero mis amigos me dicen CHINO 😅', '🤓 Soy un programador que aspira ser artista técnico.',
  '🎮 Estudie Programación enfocada a videojuegos en UNIAT',
  '🕹 Tengo experiencia trabajando en Unity con C# y Unreal Engine mayormente con su sistema de Blueprints.', '⚛ Tomé un curso de React, Javascript, MongoDB y autenticación en Firebase.', '💻 Me interesan mucho los shaders y cómo funcionan los gráficos por computadora', '💃🕺 Finalmente y completamente no relacionado me gusta el baile, las artes marciales, comer y escalar :D', 'Te invito a que si te interesa lo que ves aqui, des una checada a mis trabajos anteriores y consideres establecer contacto'],          
  links: 
    [
      {
        title:'frank.castaneda.g@gmail.com',link:'frank.castaneda.g@gmail.com',icon:'faEnvelope'
      },
      {
        title:'LinkedIn',link:'https://www.linkedin.com/in/francisco-emmanuel-castañeda-lópez-550b07251',icon:'faLinkedinIn'
      },
      {
        title:'Google-Play', link:'https://play.google.com/store/apps/details?id=com.FamiliaIncluyenteAC.FutbolAsertivo&pcampaignid=web_share',icon:'faGooglePlay'
      },
      {
        title:'CHI-NO', link:'https://www.youtube.com/@ReverseChin0',icon:'faYoutube'
      },
      {
        title:'Github', link:'https://github.com/ReverseChin0',icon:'faGithubAlt'
      },
      {
        title:'Itch.io',link:'https://reversechin0.itch.io/',icon:'faItchIo'
      }
  ],
  images:[
          {image: basePath+'about/CV_2023_Francisco.jpg',   image_sm:basePath+'about/CV_2023_Francisco_sm.jpg'},
          {image: basePath+'about/FotoChida_opt.jpg',       image_sm:basePath+'about/FotoChida_opt_sm.jpg'},
          {image: basePath+'about/ReactCertificate.jpg',    image_sm:basePath+'about/BlenderCertificate_sm.jpg'},
          {image: basePath+'about/BlenderCertificate.jpg',  image_sm:basePath+'about/BlenderCertificate_sm.jpg'},
         ]  
}

export const EN_AboutCont:BaseContent = { //ya
  title: '¡Hi!',
  contents: [ 'My name is Francisco Emmanuel Castañeda López but my friends call me CHINO 😅', '🤓 I am a programmer who aspires to be a technical artist ',
  '🎮 I studied programming focused on videogames at UNIAT.',
  '🕹 I have experience working in Unity with C# and Unreal Engine mostly with its Blueprints system.', 
  '⚛ I took a course on React, Javascript, MongoDB and authentication in Firebase.', 
  '💻 I am very interested in shaders and how computer graphics work.', 
  '💃🕺 Finally and completely unrelated I like dancing, martial arts, eating and rock climbing :D', 
  'I invite you, if you are interested in what you see here, to take a look at my previous work'],          
  links: 
    [
      {
        title:'frank.castaneda.g@gmail.com',link:'frank.castaneda.g@gmail.com',icon:'faEnvelope'
      },
      {
        title:'LinkedIn',link:'https://www.linkedin.com/in/francisco-emmanuel-castañeda-lópez-550b07251',icon:'faLinkedinIn'
      },
      {
        title:'Google-Play', link:'https://play.google.com/store/apps/details?id=com.FamiliaIncluyenteAC.FutbolAsertivo&pcampaignid=web_share',icon:'faGooglePlay'
      },
      {
        title:'CHI-NO', link:'https://www.youtube.com/@ReverseChin0',icon:'faYoutube'
      },
      {
        title:'Github', link:'https://github.com/ReverseChin0',icon:'faGithubAlt'
      },
      {
        title:'Itch.io',link:'https://reversechin0.itch.io/',icon:'faItchIo'
      }
  ],
  images:[
    {image: basePath+'about/CV_2023_Francisco.jpg',   image_sm:basePath+'about/CV_2023_Francisco_sm.jpg'},
    {image: basePath+'about/FotoChida_opt.jpg',       image_sm:basePath+'about/FotoChida_opt_sm.jpg'},
    {image: basePath+'about/ReactCertificate.jpg',    image_sm:basePath+'about/BlenderCertificate_sm.jpg'},
    {image: basePath+'about/BlenderCertificate.jpg',  image_sm:basePath+'about/BlenderCertificate_sm.jpg'},
   ]   
}

export const ES_boxGalleryCont:BaseContent = {
  title: 'Personalización Personajes',
  contents: ['Este es un proyecto que estoy realizando para titularme, el objetivo era conseguir un alto nivel de personalización'],  
  images: [ 
            {image: basePath+'experiments/boxing_1.jpg', image_sm: basePath+'experiments/boxing_1_sm.jpg'},
            {image: basePath+'experiments/boxing_2.jpg', image_sm: basePath+'experiments/boxing_2_sm.jpg'},
            {image: basePath+'experiments/boxing_3.jpg', image_sm: basePath+'experiments/boxing_3_sm.jpg'}
          ]
}

export const EN_boxGalleryCont:BaseContent = {
  title: 'Character customization',
  contents: ['This is a project I am doing for my degree, the objective was to achieve a high level of customization'],  
  images: [ 
    {image: basePath+'experiments/boxing_1.jpg', image_sm: basePath+'experiments/boxing_1_sm.jpg'},
    {image: basePath+'experiments/boxing_2.jpg', image_sm: basePath+'experiments/boxing_2_sm.jpg'},
    {image: basePath+'experiments/boxing_3.jpg', image_sm: basePath+'experiments/boxing_3_sm.jpg'}
  ]
}

export const ES_futGalleryCont:BaseContent = {
  title: "Fútbol Asertivo",
  contents:['Un pequeño juego realizado para Familia Incluyente A.C. modelado y programado por mi'],
  images: [ 
            {image: basePath+'futbol/futbol-1.jpg', image_sm: basePath+'futbol/futbol-1_sm.jpg'},
            {image: basePath+'futbol/futbol-2.jpg', image_sm: basePath+'futbol/futbol-2_sm.jpg'},
            {image: basePath+'futbol/futbol-3.jpg', image_sm: basePath+'futbol/futbol-3_sm.jpg'},
          ],
  links:[{
    title:'Google-Play', link:'https://play.google.com/store/apps/details?id=com.FamiliaIncluyenteAC.FutbolAsertivo&pcampaignid=web_share',icon:'faGooglePlay'
  }]
}

export const EN_futGalleryCont:BaseContent = {
  title: "Assertive Soccer",
  contents:['A small game made for Familia Incluyente A.C. modeled and programmed by me.'],
  images: [ 
    {image: basePath+'futbol/futbol-1.jpg', image_sm: basePath+'futbol/futbol-1_sm.jpg'},
    {image: basePath+'futbol/futbol-2.jpg', image_sm: basePath+'futbol/futbol-2_sm.jpg'},
    {image: basePath+'futbol/futbol-3.jpg', image_sm: basePath+'futbol/futbol-3_sm.jpg'},
  ],
  links:[{
    title:'Google-Play', link:'https://play.google.com/store/apps/details?id=com.FamiliaIncluyenteAC.FutbolAsertivo&pcampaignid=web_share',icon:'faGooglePlay'
  }]
}

export const ES_substanceCont:BaseContent = { //ya
  title:'Substance Designer',
  contents:['Materiales hechos en substance designer, aqui aprendi cómo funcionan los materiales PBR en el workflow de metallic-roughness y specular-glossines'],
  images:[  
            {image:basePath+'shaderVariety/subDesignMats_1.jpg', image_sm: basePath+'shaderVariety/subDesignMats_1_sm.jpg'},
            {image:basePath+'shaderVariety/subDesignMats_2.jpg', image_sm: basePath+'shaderVariety/subDesignMats_2_sm.jpg'},
         ]
}

export const EN_substanceCont:BaseContent = { //ya
  title:'Substance Designer',
  contents:['Materials made in substance designer, here I learned how PBR materials work in the metallic-roughness and specular-glossines workflow.'],
  images:[  
            {image:basePath+'shaderVariety/subDesignMats_1.jpg', image_sm: basePath+'shaderVariety/subDesignMats_1_sm.jpg'},
            {image:basePath+'shaderVariety/subDesignMats_2.jpg', image_sm: basePath+'shaderVariety/subDesignMats_2_sm.jpg'},
         ]
}

export const ES_shadGalleryCont:BaseContent = {
  title: 'Shaders',
  contents: ['Algunos Shaders que he hecho en la escuela y en mi tiempo libre ヾ(•ω•`)o'],
  images: [ 
              {image: basePath+'shaderVariety/ditherShader_0.jpg', image_sm:basePath+'shaderVariety/ditherShader_0_sm.jpg'},
              {image: basePath+'shaderVariety/shadervariety_1.jpg', image_sm:basePath+'shaderVariety/shadervariety_1_sm.jpg'},
              {image: basePath+'shaderVariety/shadervariety_2.jpg', image_sm:basePath+'shaderVariety/shadervariety_2_sm.jpg'},
              {image: basePath+'shaderVariety/shadervariety_3.jpg', image_sm:basePath+'shaderVariety/shadervariety_3_sm.jpg'},
          ]
}

export const EN_shadGalleryCont:BaseContent = {
  title: 'Shaders',
  contents: ['Some Shaders that I have made at school and in my spare time ヾ(•ω•`)o'],
  images: [ 
              {image: basePath+'shaderVariety/ditherShader_0.jpg', image_sm:basePath+'shaderVariety/ditherShader_0_sm.jpg'},
              {image: basePath+'shaderVariety/shadervariety_1.jpg', image_sm:basePath+'shaderVariety/shadervariety_1_sm.jpg'},
              {image: basePath+'shaderVariety/shadervariety_2.jpg', image_sm:basePath+'shaderVariety/shadervariety_2_sm.jpg'},
              {image: basePath+'shaderVariety/shadervariety_3.jpg', image_sm:basePath+'shaderVariety/shadervariety_3_sm.jpg'},
          ]
}

export const ES_experimGalleryCont:BaseContent ={
  title:'Unos Experimentillos',
  contents: ['Experimentos con shaders, meshes, inverse kinematics, etcétera'],
  images: [ 
            {image: basePath+'experiments/spider.gif',image_sm: basePath+'experiments/matrixProjection_sm.jpg'},
            {image: basePath+'experiments/matrixProjection.jpg',image_sm: basePath+'experiments/matrixProjection_sm.jpg'},
            {image: basePath+'experiments/mesh-Deform.jpg',image_sm: basePath+'experiments/mesh-Deform_sm.jpg'},
            {image: basePath+'experiments/customLighting.jpg',image_sm: basePath+'experiments/customLighting_sm.jpg'},
          ]
}

export const EN_experimGalleryCont:BaseContent ={
  title:'A Few Experiments',
  contents: ['Experiments with shaders, meshes, inverse kinematics, etcetera'],
  images: [ 
            {image: basePath+'experiments/spider.gif',image_sm: basePath+'experiments/matrixProjection_sm.jpg'},
            {image: basePath+'experiments/matrixProjection.jpg',image_sm: basePath+'experiments/matrixProjection_sm.jpg'},
            {image: basePath+'experiments/mesh-Deform.jpg',image_sm: basePath+'experiments/mesh-Deform_sm.jpg'},
            {image: basePath+'experiments/customLighting.jpg',image_sm: basePath+'experiments/customLighting_sm.jpg'},
          ]
}

export const ES_modelGalryCont: BaseContent = { 
  title: 'Modelado',
  contents: ['Modelos que he realizado'],
  images: [ 
            {image: basePath + 'models/BattleAxe.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/rifleShaded.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Boss.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Charm.jpg', image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Chunky.jpg', image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Cozy.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Dance.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Ethereal.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/World.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Gate_Kurisu3.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Grave.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Harvest_skin.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Illusion.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Leap.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/magic.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Mask.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Porthole.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/pretend.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Blend1.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/rifleHiPoly.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Shy.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Shy2.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Soft.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Soft2.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/spirit.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Gate_Kurisu1.jpg',image_sm:basePath + 'models/World_sm.jpg'},
          ]

}

export const EN_modelGalryCont: BaseContent = { 
  title: '3D Modeling',
  contents: ['Models I have made'],
  images: [ 
            {image: basePath + 'models/BattleAxe.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/rifleShaded.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Boss.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Charm.jpg', image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Chunky.jpg', image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Cozy.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Dance.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Ethereal.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/World.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Gate_Kurisu3.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Grave.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Harvest_skin.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Illusion.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Leap.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/magic.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Mask.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Porthole.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/pretend.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Blend1.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/rifleHiPoly.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Shy.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Shy2.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Soft.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Soft2.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/spirit.jpg',image_sm:basePath + 'models/World_sm.jpg'},
            {image: basePath + 'models/Gate_Kurisu1.jpg',image_sm:basePath + 'models/World_sm.jpg'},
          ]

}

export const ES_webContent: ImageTextContent = {
  title:'Desarrollos Web',
  introduction:'Los siguientes sitios web fueron hechos mientras aún estaba aprendiendo react',
  contentGroups:[
                  {
                    contentTitle:'Gifexpert',
                    content:'Una aplicación en React que busca Gifts （⊙ｏ⊙）',
                    linkTitle:'Gifexpert',
                    link:'https://reversechin0.github.io/react-gifexpert',
                    images:[{ 
                      image:basePath+'webpages/gifexpert1.jpg',
                      image_sm:basePath+'webpages/gifexpert1_sm.jpg'
                    }]    
                  },
                  {
                    contentTitle:'MERN-Calendar',
                    content:'Aplicación con Backend que guarda eventos en un calendario, Utiliza Redux, Express y MongoDB y necesitas autenticar Usuario (⓿_⓿)',
                    linkTitle:'MERN-Calendar (tal vez dure un rato en cargar)',
                    link:'https://mern-calendar-chino.herokuapp.com/auth/login',
                    images:
                    [
                      {image: basePath+'webpages/mern1.jpg',image_sm: basePath+'webpages/mern1_sm.jpg'},
                      {image: basePath+'webpages/mern2.jpg',image_sm: basePath+'webpages/mern2_sm.jpg'},
                      {image: basePath+'webpages/mern3.jpg',image_sm: basePath+'webpages/mern3_sm.jpg'},
                    ]    
                  },
                  {
                    contentTitle:'SPA_Heroes',
                    content:'Aplicacion con autenticación simple que muestra un repertorio de super heroes (✿◡‿◡)',
                    linkTitle:'SPA_Heroes',
                    link:'https://reversechin0.github.io/spa_heroes',
                    images:
                    [{
                      image: basePath+'webpages/HeroesSPA1.jpg', image_sm: basePath+'webpages/HeroesSPA1_sm.jpg'
                    }]
                  },
                  {
                    contentTitle:'Portafolio Anterior',
                    content:'Mi página principal anterior 😅',
                    linkTitle:'No lo tengo ya, pero dejo mi Repositorio de Github',
                    link:'https://reversechin0.github.io/',
                    images:[
                      { image:basePath+'webpages/legacy1.jpg', image_sm: basePath+'webpages/legacy1_sm.jpg'},
                      { image:basePath+'webpages/legacy2.jpg', image_sm: basePath+'webpages/legacy2_sm.jpg'},
                      { image:basePath+'webpages/legacy3.jpg', image_sm: basePath+'webpages/legacy3_sm.jpg'},
                    ]   
                  }
                ]
}

export const EN_webContent: ImageTextContent = {
  title:'Web Developments',
  introduction:'The following websites were made while I was still learning react',
  contentGroups:[
                  {
                    contentTitle:'Gifexpert',
                    content:'A React application that searches Gifs（⊙ｏ⊙）',
                    linkTitle:'Gifexpert',
                    link:'https://reversechin0.github.io/react-gifexpert',
                    images:[{ 
                      image:basePath+'webpages/gifexpert1.jpg',
                      image_sm:basePath+'webpages/gifexpert1_sm.jpg'
                    }]
                  },
                  {
                    contentTitle:'MERN-Calendar',
                    content:'Backend application that saves events in a calendar, uses Redux, Express and MongoDB and you need to authenticate User (⓿_⓿)',
                    linkTitle:'MERN-Calendar (may take a while to load)',
                    link:'https://mern-calendar-chino.herokuapp.com/auth/login',
                    images:
                    [
                      {image: basePath+'webpages/mern1.jpg',image_sm: basePath+'webpages/mern1_sm.jpg'},
                      {image: basePath+'webpages/mern2.jpg',image_sm: basePath+'webpages/mern2_sm.jpg'},
                      {image: basePath+'webpages/mern3.jpg',image_sm: basePath+'webpages/mern3_sm.jpg'},
                    ]    
                  },
                  {
                    contentTitle:'SPA_Heroes',
                    content:'Application with simple authentication showing a repertoire of super heroes (✿◡‿◡)',
                    linkTitle:'SPA_Heroes',
                    link:'https://reversechin0.github.io/spa_heroes',
                    images:
                    [{
                      image: basePath+'webpages/HeroesSPA1.jpg', image_sm: basePath+'webpages/HeroesSPA1_sm.jpg'
                    }]
                  },
                  {
                    contentTitle:'Previous Portfolio',
                    content:'My previous home page 😅',
                    linkTitle:"I don't have it anymore, but here is my Github repository",
                    link:'https://reversechin0.github.io/',
                    images:[
                      { image:basePath+'webpages/legacy1.jpg', image_sm: basePath+'webpages/legacy1_sm.jpg'},
                      { image:basePath+'webpages/legacy2.jpg', image_sm: basePath+'webpages/legacy2_sm.jpg'},
                      { image:basePath+'webpages/legacy3.jpg', image_sm: basePath+'webpages/legacy3_sm.jpg'},
                    ]    
                  }
                ]
}