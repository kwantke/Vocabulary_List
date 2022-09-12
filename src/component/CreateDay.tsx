import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch"

export default function CreateDay(){

    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    function onSubmit(e: React.FormEvent){
        e.preventDefault();
                
        fetch(`http://localhost:3001/days/`,{
            method: 'POST',
            headers :{
                'content-Type' : 'application/json',
            },
            body : JSON.stringify({
                day : days.length+1
            })
        }).then(res =>{
            if(res.ok){
                alert("생성이 완료 되었습니다.");
                history.push('/')
            }
        })
        
    }
    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={onSubmit}>Day 추가</button>
        </div>
    )
}