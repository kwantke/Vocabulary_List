import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IDay } from "./DayList";

export default function CreateWord(){
    const dayList:IDay[]= useFetch("http://localhost:3001/days");
    const history = useHistory();
    function onSubmit(e: React.FormEvent){
        e.preventDefault();
        if(dayRef.current && engRef.current && korRef.current){

        
            const day = dayRef.current.value
            const eng = engRef.current.value;
            const kor = korRef.current.value;
            fetch(`http://localhost:3001/words/`,{
                method: 'POST',
                headers :{
                    'content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDone  : false
                })
            }).then(res =>{
                if(res.ok){
                    alert("생성이 완료 되었습니다.");
                    history.push(`/day/${day}`)
                }
            })
        }
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>    
        <div className="input_area">
            <label>Day</label>    
            <select ref={dayRef}>{

                dayList.map(day =>(
                    <option key={day.id}>{day.day}</option>
                ))
                }                
            </select>
        </div>    
        <button>저장</button>

    </form>
    )
}