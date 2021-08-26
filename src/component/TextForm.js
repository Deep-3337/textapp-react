import React,{useState} from 'react';


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log('Uppercase Button Clicked '+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted into uppercase', 'success');
    }

    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted into lowercase', 'success');
    }

    const handleclearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert('Clear textbox', 'success');
    }

    const handleCopyText = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard', 'success');
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed', 'success');
    }

    const handleOnChange = (event)=>{
        // console.log('On changed');
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Text here");

    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',
                color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1"  data-toggle="modal" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1"  data-toggle="modal" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1"  data-toggle="modal" onClick={handleExtraSpaces}>Remove Spaces</button>

        </div>
        <div className="conatiner my-3" style = {{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it"}</p>
        </div>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
