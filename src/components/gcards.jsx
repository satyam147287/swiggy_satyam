export default function Gcard({groceryelements}){

    return(
       <div>
             <a href={groceryelements?.action?.link}>
                <img className="h-max" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryelements.imageId}></img>
             </a>
             <div className="bg-white max-w-[80%] container mx-auto text-center  font-sans text-lg font-bold">
                {groceryelements.description}
             </div>
       </div>
    )
}
