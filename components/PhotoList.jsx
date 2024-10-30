import PhotoCard from "./PhotoCard";


export default async function PhotoList({photos}) {
            
  return (
    <div className="img-grid">
        {photos.map((photo)=>(
            <PhotoCard photo={photo} key={photo.id}/>
        ))}
    </div>
  )
}
