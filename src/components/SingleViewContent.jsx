import '../styles/SingleViewContent.css'

export const SingleViewContent = ({title="",description,images=[]}) => {
  return (
    <>

      <section>
        <div className="single-view-grid">
          
          {/* Si hay imagen la ponemos */
            images.map((image,index)=>(
              <div key={"div"+index} className="image-frame">
                <img key={"img"+index} src={image} />
              </div>
            ))              
          }

          {
            !!title || !!description ? 
              <div className="single-text-grid"> 
                {!!title && <h1>{title}</h1>}

                { !!description && <p>{description}</p>  }
              </div> 
              : <div/>
          }  

        </div>    
      </section>
    </>
  )
}
