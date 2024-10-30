import Image from "next/image";
import Link from "next/link";


export default function PhotoCard({photo}) {
  return (
    <Link href={`photos/${photo.id}`} className="group">
        <Image
        src={photo.url}
        width={700}
        height={700}
        alt={photo.title}
        />
        <div className="title-container">
            <h4 className="text-white">{photo.title}</h4>
        </div>
    </Link>
  )
}
