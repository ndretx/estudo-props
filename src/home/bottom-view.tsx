import { Component } from "react";
import ButtonComponent from "./components/button-component";

interface Props {
    mensagem: string;
    
}


export default class BottomView extends Component<Props>{
    render() {
        return (
            <div style={{ backgroundColor: "Green" }}>
                <h1>{this.props.mensagem} </h1>
                <h3>{this.props.mensagem} </h3>
                <h2>{this.props.mensagem} </h2>
                <ButtonComponent  mensagem={this.props.mensagem}/>
            </div>
        )
    }
}