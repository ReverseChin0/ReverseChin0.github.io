import '../styles/GalleryComponent.css'
export const GalleryComponent = ({paths=[]}) => {
  console.log(paths);
  return (
    <>
      <div className="gallery-grid">
        {
          paths.map((imag,index)=>(
            <img key={index} src={imag}/>
          ))
        }
      </div>
    </>
  )
}
