import { Component } from "react";
import ButtonComponent from "./components/button-components";

interface Props {
    mensagem: string;
}

export default class CentralView extends Component<Props>{
    render() {
        return (
            <div style={{ backgroundColor: "Red" }}>
                <h1>{this.props.mensagem} </h1>
                <h3>{this.props.mensagem} </h3>
                <h2>{this.props.mensagem} </h2>
                <ButtonComponent mensagem={this.props.mensagem}/>
            </div>
        )
    }
}