import { createContext, useEffect, useState } from "react";
import MyAxios from "../axios/myAxios";
import { useContext } from "react";

const AdatContext=createContext();

export const Adatprovider=({children})=>{
    const [szavak, setSzavak]=useState([]);
    const [tema, setTema]=useState([]);

    //get tema
    const getTema=async()=>{
        try{
            const {data}=await MyAxios(`/tema`);
            setTema(data);
            console.log(data);
        }catch(error){
            console.log("Hiba get tema",error);
        }
    }

    //get tema
    const getSzavak=async()=>{
        try{
            const {data}=await MyAxios(`/szavak`);
            setSzavak(data);
            console.log(data);
        }catch(error){
            console.log("Hiba get szavak",error);
        }
    }

    useEffect(()=>{
        getSzavak();
        getTema();
    },[]);

    return(
    <AdatContext.Provider value={
        {
            tema,
            szavak,
            getSzavak,
            getTema,
        }
    }> {children}</AdatContext.Provider>
    )
}

export default function useAdatContext(){
    return useContext(AdatContext);
}
