import React,{useState} from 'react'


export default function Textform(props) {
    const [Text, setText] = useState('');
    // setText('Enter Your Text Here');
    const onChangeHandler = (event)=>{
        // console.log('OnChange');
        setText(event.target.value)
    };
    const handleUpClick = () =>{
      // console.log('clicked');
      const newText = Text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to upper case","success")

    }
    const handleLoClick = () =>{
      // console.log('clicked');
      const newText = Text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case","success")

    }
    // setText('new text')
    const clearText = () =>{
      const newText = '';
      setText(newText);
      props.showAlert("Text Cleared","success")

    }
    const handleCopy = () =>{
      let text = document.getElementById('txtarea');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied","success")

    }
    const handleExtraSpaces = () =>{
      let newText = Text.split(/[ ]+/)
      setText(newText.join(' '))
      props.showAlert("Removed Extra Spaces","success")

    }

    let word;
    // let wordTwo = [];
    if (Text.length < 1) {
      word = Text.length
    } else {
      // Text.trim()
      // wordTwo.join(Text.split(" "))
      // console.log(wordTwo);
      let newText = Text.split(/[ ]+/)
      if (newText[newText.length - 1] === '' ) {
        word = newText.length - 1
        // console.log(`"${newText[newText.length - 1]}"`);
      } else {
        word = newText.length
      }
      // console.log(newText);
      // console.log(Text.length)
    }

    let readingTime = 0.0133 * word
    let textPreview;
    if (Text.length <= 500) {
      textPreview = Text
    } else {
      textPreview = Text.slice(0, 500) + '.....';
    }

    const handleCapitalizeFirstLetter =() => {
      let upperText = Text.split(" ");
      for (let i = 0; i < upperText.length; i++) {
        upperText[i] = upperText[i].charAt(0).toUpperCase() + upperText[i].slice(1) 
        // console.log(upperText);
      }
      let upperStr = upperText.join(" ")
      // console.log(upperStr);
      setText(upperStr)
    }
    const btn = document.querySelectorAll('.btn');
    console.log(btn);
    // btn.style.backgroundColor = props.theme.backgroundColor;
    for (let i = 0; i < btn.length; i++) {
      const element = btn[i];
      element.style.backgroundColor = props.theme.backgroundColor
      element.style.color = props.theme.color
      
    }
    
  return (
    <>
      <div className='utilities-inner' >
          <div className="mb-3">
          
          <div className="text-box">
            <label htmlFor="txtarea" className="form-label"><h3>{props.heading}</h3></label>
            <textarea className="form-control" value={Text} onChange={onChangeHandler} id="txtarea" rows="8" style={{backgroundColor: props.mode==='black'?'white':'grey', color: props.mode==='black'?'black':'white'}}></textarea>
            <button className="btn mt-3 mr-2" onClick={handleUpClick}>Convert Upper Case</button>
            <button className="btn mt-3 mx-2" onClick={handleLoClick}>Convert Lower Case</button>
            <button className="btn mt-3 mx-2" onClick={clearText}>Clear Text</button>
            <button className="btn mt-3 mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn mt-3 mx-2" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
            <button className="btn mt-3 mx-2" onClick={handleCapitalizeFirstLetter}>Capitalize First Letter of Each Word</button>
            {/* <button className="btn mt-3 mx-2" onClick={handleCapitalizeFirstword}>Capitalize First Letter of Each Sentence</button> */}

          </div>
          </div>
      </div>
      <div className="analysis">
        <h2>Your text analysis...</h2>
        <p>{word} words and {Text.length} characters</p>
        <p>{readingTime.toFixed(1)} Minutes read</p>
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <p>{textPreview.length>0?textPreview:'Enter Text In the box above to preview here'}</p>
      </div>
    </>
  )
}

