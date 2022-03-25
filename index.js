const imageContainer=document.getElementById("image-container")
const loader=document.getElementById("loader");

let photosArray=[];
const count=30;
const apiKey="vqds0ni5jK0B5cOcV90erj5iIOzRTlk1O5wemuHPQHI";
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(ele,attributes){
    for(const key in attributes){
        ele.setAttribute(key,attributes[key]);
    }
}

function displayPhotos(){
    console.log(photosArray);
    photosArray.forEach((photo)=>{
        const item=document.createElement("a");
        // item.setAttribute("href",photo.links.html);
        // item.setAttribute("target","_blank");
        
        console.log(item);
        setAttributes(item,{
            href:photo.links.html,
            target:"_blank"
        })
        // console.log(item);
         const img=document.createElement("img");
        // img.setAttribute("src",photo.urls.regular);
        // img.setAttribute("alt",photo.alt_description);
        // img.setAttribute("title",photo.alt_description);
        setAttributes(img,{
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        })
        item.appendChild(img);
        console.log(item);
        imageContainer.appendChild(item);
    });
}


async function getPhotos(){
    try{
        const response=await fetch(apiUrl);
         photosArray=await response.json();
        displayPhotos();
    }
    catch(e){
      
    }
}

getPhotos();

window.addEventListener("scroll",()=>{
    console.log(window.innerHeight);
    console.log(window.scrollY);
    console.log(window.innerHeight+window.scrollY);
    console.log(document.body.offsetHeight)
    console.log("--------------")
    if(window.innerHeight+window.scrollY>document.body.offsetHeight){
         getPhotos();
    }
})