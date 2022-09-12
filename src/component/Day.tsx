import dummy from "../db/data.json"
import { useParams } from "react-router-dom" 
import Word, { IWord } from "./Word";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
export default function Day(){
    

    const {day} = useParams<{day:string}>();
  
    //const wordList:IWord[]= dummy.words.filter(word => word.day===day);
    const wordUrl = process.env.REACT_APP_WORD as string +"?day=" +day;
    const wordList:IWord[] = useFetch(wordUrl);
    /*
    const [wordList, setWordList] = useState<IWord[]>([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            setWordList(data);
        })
    },[day])*/
    
    return <>
        <h2>Day {day}</h2>
        {wordList.length ===0 && <span>Loding...</span>}
        <table>
            <tbody>
                {wordList.map(word =>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
}