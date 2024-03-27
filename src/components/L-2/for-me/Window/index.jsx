import { useState } from "react"
import "./index.css"

const Window = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >open window</button>
         {   isOpen && <div className="window">
                <div className="window_btn_container">
                    <button
                    onClick={()=>{setIsOpen(false)}}
                    >X</button>

                </div>
                <h1>VsCode</h1>

            </div>}
        </>
    )
}

export default Window