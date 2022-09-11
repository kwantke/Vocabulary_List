import dummy from "../db/data.json"
import { useParams } from "react-router-dom" 
import Word, { IWord } from "./Word";
export default function Day(){
    

    const {day} = useParams<{day:string}>();
    const wordList:IWord[]= dummy.words.filter(word => word.day===day);
    
    
    return <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word =>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
}