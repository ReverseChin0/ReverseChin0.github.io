interface Props{
  embedId:string,
  title:string
}

const YoutubeEmbed: React.FC<Props> = ({ embedId, title }) => (
  <section className="gridsection inView">
    <div className="contentCard">
      <h1>{title}</h1>
      <div className="video-responsive">
        <iframe
          width="854 "
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>    
  </section>
  
);

export default YoutubeEmbed;
