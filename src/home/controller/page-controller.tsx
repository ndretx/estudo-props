import { Component } from "react";
import BottomVeiw from "../bottom-view";
import CentralView from "../central-view";
import HomeView from "../top-view";



interface Props {
    mensagem: string;
}
export default class HomeController extends Component<Props>{
    render() {
        return (
            <div>
                <HomeView mensagem={this.props.mensagem} />
                <CentralView mensagem={this.props.mensagem} />
                <BottomVeiw mensagem={this.props.mensagem} />
            </div>
        )
    }
}