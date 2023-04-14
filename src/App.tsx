import HomeController from "./home/controller/page-controller";


const mensagem = "Exibindo aqui a mensagem"




function App() {

 
  return (
   <div>
      <HomeController mensagem={mensagem}/>
   </div>
  );
}

export default App;

