import Typewriter from 'typewriter-effect';

function Navbar(){
  

    return(
        <>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello Vashnavi')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
        </>
    )
}

export default Navbar