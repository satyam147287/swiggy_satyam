
export default function FCard({foodelement}){

    return(
        <>
        <a className="" href={foodelement?.action?.link}>
                <img className="h-42 w-45 object-cover rounded-lg " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodelement?.imageId}></img>
        </a>
        </>
    )
}