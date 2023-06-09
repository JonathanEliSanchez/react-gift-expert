import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);


    const getImages = async() => {
        const newImages = await  GetGifs( category );
        setImages(newImages);
        setisLoading(false);
    }

    useEffect( () => {
        getImages();
    },[])


  return {
    images,
    isLoading
  }
}
