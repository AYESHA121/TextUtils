import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState("") // settext is here as update function ie 2nd argument=update function.
    const [asum, setasum] = useState(0);
    // const [mystyle, setMystyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
    // const [modebtnText, setmodebtnText] = useState("Enable Drak Mode")
    const ConvertToUpper = () => {

        // text="hkjshdkjahdka" ===> wromg way to set state.
        settext(text.toUpperCase()) //correct way to change state  
        props.alert("Converted to Upper case","success")

    }
    const ConvertToLower = () => {

        // text="hkjshdkjahdka" ===> wromg way to set state.
        settext(text.toLowerCase()) //correct way to change state  
        props.alert("Converted to lower case","success")
    }
    const OnChangefunc = (e) => {
        //  console.log("Changeclicked")
        // text="hkjshdkjahdka" ===> wromg way to set state.
        settext(e.target.value) //correct way to change state  

    }
    const OnReset = () => {
        //  console.log("Changeclicked")
        // text="hkjshdkjahdka" ===> wromg way to set state.
        settext("") //correct way to change state  
        props.alert("Text is cleared","success")

    }


    const Acounts = () => {
        let textarr = text.split("");
        let prevasum = asum;
        let newasum = 0;
        for (let i = 0; i < textarr.length; i++) {
            if (textarr[i] === "a" || textarr[i] === "A") {
                newasum += 1;

                if (newasum !== prevasum) {
                    setasum(newasum);
                    prevasum = newasum;
                }
            }
        }
      
    }

    // const toggleStyle = () => {

    //     if (mystyle.color === "black") {
    //         setMystyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setmodebtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMystyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setmodebtnText("Enable Dark Mode")
    //     }
    // }
    const CopyText = () => {

        navigator.clipboard.writeText(text)
        props.alert("Copied to clipboard","success")
    }

    const RemoveExtraSpace = () => {
        let newtext = text.split(/[ ]+/); //having one or more spcaes it uses regix expression
        settext(newtext.join(" "))
        props.alert("Extra Spaces is removed","success")
    }
    return (<>

        <div className={`container my-3 text-${props.mode === "dark" ? "light" : "dark"}`} >{/*style={mystyle}> */}
            <h5>{props.heading}</h5>
            <textarea className="form-control" id="myBox" rows="10" value={text} onChange={OnChangefunc} style={{ background: props.mode === "dark" ? "#3a3434" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
            <div className="my-3">
                <button className="btn btn-primary mx-1 my-1" onClick={ConvertToUpper}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={ConvertToLower}>Convert to Lower Case</button>
                <button className="btn btn-secondary mx-1 my-1" onClick={Acounts}>Count A</button>
                <button className="btn btn-danger mx-1 my-1" onClick={OnReset}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={RemoveExtraSpace}>Remove Extra Space</button>
                {/* <button className="btn btn-primary mx-1 my-1" onClick={toggleStyle}>{modebtnText}</button> */}

            </div>
        </div>
        <div className={`container my-3 text-${props.mode === "dark" ? "light" : "dark"}`}>         {/*style={mystyle}> */}
            <div>
                <p>words {text.split(" ").filter((ele)=>{return ele.length!==0}).length} and characters {text.length}</p>
                <p>Minutes to read text {0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} </p>
                <p>A in whole text {asum} </p>
                <h3>Preview</h3>
                <p> {text.length > 0 ? text : "Enter your Text in above Box to Preview Here"}</p>
            </div>
        </div>
    </>
    )
}