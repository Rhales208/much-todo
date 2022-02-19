import {useState}
import {input} from "antd"

export default function NewTask(){
const [task, setTask] = useState("");
    
const taskObject = {
    task:"Buy Milk",

}
return (
    <input
     placeholder="Enter task name" 
     onChange={event => console.log(event.target.value.)} />
    />
     </>
);
}