import Header from "./components/Header"

function App()
{
    // return(
    //     <>
    //     <Header text='Hello World'/>
    //     <div className="container">
    //         <h1>My App</h1>
    //     </div>
    //     </>
        
    // )

    return(
        <>
        {/* //// This is how u pass on the component to the manin app for rendering and hencforth u can pass props which are meant to be caught by components */}
        <Header text='Hello World'/>  


        
        <div className="container">
            <h1>My App</h1>
        </div>
        </>
        
    )


}


export default App