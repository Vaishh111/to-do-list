

function Maincomp({img1,text,rot}){
    
    console.log(rot)

    return(
        <>
         <div className="maioncomp" 

         style={{flexDirection:`${rot ? 'row-reverse' : 'row'}`}}
         
         >

            <div className="left-content">
           {text}
            </div>

            <div className="right-content">
            {text}
          </div>

          </div>
        </>
    )
}

export default Maincomp