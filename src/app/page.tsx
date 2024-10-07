import Card from "@/component/page";

export default function Home(){
  return(

    <div className="flex flex-wrap justify-center mb-4">


    <div  className="max-w-full md:w-1/3 xl:w-1/4 p-6 text-lg bg-amber-300 "> 
    <Card name="sadaf" rollno={1112} day="monday" />

    </div>

    <hr></hr>
    
    <div  className="max-w-full md:w-1/3 xl:w-1/4 p-6 text-lg bg-red-500">
    <Card name="shazia" rollno={1122} day="monday" />
    </div>
   
   <hr></hr>


    <div className="max-w-full md:w-1/3 xl:w-1/4 p-6 text-lg bg-slate-500">
    <Card name="afsha" rollno={1133} day="monday" />
     </div>




     
    </div>
  )
}

