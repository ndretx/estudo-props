
import { useAlert } from "react-alert-with-buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



interface Props {
    mensagem: string;
   

}

export default function ButtonComponent(props: Props) {
    const alert = useAlert()
    const notify = () =>
        toast.success(props.mensagem, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000, theme: "colored",
            closeOnClick: true,
            pauseOnHover: false,
            hideProgressBar: false,
           
        });

    return (
        <div >
            <button
                onClick={() => {
                    alert.open({
                        message: props.mensagem,
                    });
                }}
                style={{ color: "white", backgroundColor: "#000000" }} >
                <span>{props.mensagem}</span>
            </button>
            <div>
                <button style={{backgroundColor:"black", color:"white"}}
                    onClick={notify}>Alerta!</button>
                <div className="toastify-container">
                    <ToastContainer style={{ height: "50px", width: "250px" }} />
                </div>
            </div>
            
        
            

            
        </div >
        
    )

}