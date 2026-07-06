import { Card } from "./Components/Card";
import { Counter } from "./Components/Counter";
import { Servicecard } from "./Components/Servicecard";
function App() {
  const data=[
    {servicename:"Marketing",desc:"seo ads"},
    {servicename:"Analysis",desc:"using powerbi"},
    {servicename:"ui/ux design",desc:"using figma"},
    
  ]
  const name="second project"
  return (
    <>
     <h1>{name}</h1>  
     <h2> Counter App</h2>
     <Counter/>
      <div className="main">
        {/* props */}
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7JAoesCqXkhCTqwzXbM1hc3Ty5mZlzWnlNF2Klm2Sg&s=10"
          price="250"
          title="sling Bag"
        ></Card>
        <Card
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
        price="450"
        title="Digital Watch"
        ></Card>
        <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1QmlzxwBlPlhmh6w8BM8dXFL2S3ZP4bguvtm95gAPA&s=10"
        price="2500"
        title="headphones"
        ></Card>
      </div>
    
      <Servicecard servicename="WEBSITE DEVELOPMENT" 
      desc="WE build interractive websites with popular technologies"></Servicecard>
      {
        data.map((v,i)=>{
          return(
            <Servicecard servicename={v.servicename} desc={v.desc} key={i}/>
          )

        })
      }

         </>
  );
}
export default App;
