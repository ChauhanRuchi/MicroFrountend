 import {mount as mountmarketing} from "marketing/MarketingApp"
import App from "../App";
const mount=(el)=>{
    const root = ReactDOM.createRoot(
el);
root.render(
    <React.StrictMode>  <App /></React.StrictMode>   
)    
}    
export default  ()=>{
    return(
        <div>{mount(document.getElementById("#div-marketing"))}
{mountmarketing(document.querySelector("#div-marketing"))}
</div>
    )
}