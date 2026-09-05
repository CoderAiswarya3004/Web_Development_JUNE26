export default function CustomButton({value , onClick }){
    return(
        <button style={{
            backgroundColor:"red",
            color:"greenyellow",
            border:"2px solid black"
        }}

        onClick={onClick}
        >
        {value}
        </button>
    )
}