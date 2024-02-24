import './button.css'


export default function Button(props){
    return(
        <>
        <button className='buttonMenu'>{props.title}</button>        
        </>
    );
}