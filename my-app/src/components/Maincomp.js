import React,{useState,useEffect} from 'react'

function Maincomp({img1,text,rot}){

  const [mineData,setData] = useState()

  
    
    // console.log(rot)

    let notRot = rot ? 'manshu' : 'vash';
  let number = 0;
  // async function showData(){
  //   const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   number++;
  //   const jsdata = await data.json();
  //   setData(jsdata)
  //   console.log(jsdata ,number )
  //  }


  useEffect(()=>{

    async function showData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    number++;
    const jsdata = await data.json();
    setData(jsdata)
    console.log(jsdata ,number )
   }


    showData()
  },[])


    const datamee = [
      {
        
        name:'manshu',
        age:22

      },
      {
     
        name:'vash',
        age:22

      },
      {
    
        name:'vishal',
        age:22
        

      },
      {
      
        name:'abhi',
        age:22

      },
      {
   
        name:'vivek',
        age:22

      },
      {
        
        name:'shibham',
        age:22

      },
      {
       
        name:'vanshu',
        age:22

      },
      
    ]


    return(
        <>
         <div className="" 

         style={{flexDirection:`${rot ? 'row-reverse' : 'row'}`}}
         
         >
          <ul>


      
          {/* {
            mineData?.map((data,ind)=>{
              return(<>
                <li>
                  {data.title}
                </li>
              </>)
            })


          } */}


          {
          datamee.map((data)=>{
            return(
              <>
                 <h1>
                 {data.name}
               </h1>
               <h2>
                 {data.age}
               </h2>
              </>
            )
          })
          }
        



</ul>

          <h1>    
            {/* {mineData[0]?.title} */}
          </h1>

          </div>
        </>
    )
}

export default Maincomp