import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App() {
  const [data, setData] = useState({
    "pixelPitch": 0.0,
    "cbSizeWidth": 0,
    "cbSizeHeight": 0,
    "scDimensionWidth": 0,
    "scDimensionHeight": 0,
    "lampType": "",
    "cbCountWidth": 0,
    "cbCountHeight": 0,
    resDisplay: "none",
    screenArea: 0,
    screenResolution: "",
    cabinetResolution: ""
  })

  const handleSubmit = e => {
    e.preventDefault();
    const screenArea = data.scDimensionHeight * data.scDimensionWidth

    const cbResX = (data.cbSizeWidth / data.pixelPitch)
    const cbResY = (data.cbSizeHeight / data.pixelPitch)
    const cabinetResolution = cbResX.toFixed(5) + " x " + cbResY.toFixed(5)

    const srx = (data.cbCountWidth * cbResX)
    const sry = (data.cbCountHeight * cbResY)
    const screenResolution = srx.toFixed(5) + " x " + sry.toFixed(5)

    setData(prevData => {
      prevData["resDisplay"] = "block"
      prevData["screenArea"] = screenArea
      prevData["screenResolution"] = screenResolution
      prevData["cabinetResolution"] = cabinetResolution
      return {...prevData}
    })
  }

  const handleChangePixelPitch = e => {
    setData(predata => {
      predata["pixelPitch"] = e.target.value
      return {...predata}
    })
  }

  const handleChangeCabinetSizeWidth = e => {
    setData(predata => {
      predata["cbSizeWidth"] = e.target.value
      return {...predata}
    })
  }

  const handleChangeCabinetSizeHeight = e => {
    setData(predata => {
      predata["cbSizeHeight"] = e.target.value
      return {...predata}
    })
  }
  const handleChangescDimensionWidth = e => {
    setData(predata => {
      predata["scDimensionWidth"] = e.target.value
      return {...predata}
    })
  }
  const handleChangescDimensionHeight = e => {
    setData(predata => {
      predata["scDimensionHeight"] = e.target.value
      return {...predata}
    })
  }
  const handleChangelampType = e => {
    setData(predata => {
      predata["lampType"] = e.target.value
      return {...predata}
    })
  }
  const handleChangecbCountWidth = e => {
    setData(predata => {
      predata["cbCountWidth"] = e.target.value
      return {...predata}
    })
  }
  const handleChangecbCountHeight = e => {
    setData(predata => {
      predata["cbCountHeight"] = e.target.value
      return {...predata}
    })
  }


  return (
      <div className="App">
        <form action="" className="mt-5" style={{width: "90%", margin: "0 auto"}} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="pixel-pitch">pixel pitch:</label>
            <input type="number" step="any" id="pixel-pitch" className="form-control"
                   placeholder="pixel pitch"
                   value={data.pixelPitch} onChange={handleChangePixelPitch}/>
          </div>
          <label>cabinet size:</label>
          <div className="row">
            <div className="col-md-6">
              <input type="number" id="cabinet-size-width" className="form-control"
                     value={data.cbSizeWidth} onChange={handleChangeCabinetSizeWidth}
                     placeholder="width"/>
            </div>
            <div className="col-md-6">
              <input type="number" id="cabinet-size-height" className="form-control"
                     value={data.cbSizeHeight} onChange={handleChangeCabinetSizeHeight}
                     placeholder="height"/>
            </div>
          </div>
          <label className="mt-3">screen dimension:</label>
          <div className="row">
            <div className="col-md-6">
              <input type="number" id="screen-dimension-width"
                     value={data.scDimensionWidth} onChange={handleChangescDimensionWidth}
                     className="form-control" placeholder="width"/>
            </div>
            <div className="col-md-6">
              <input type="number" id="screen-dimension-height" className="form-control"
                     value={data.scDimensionHeight} onChange={handleChangescDimensionHeight}
                     placeholder="height"/>
            </div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="lamp-type">lamp type:</label>
            <input type="text" id="lamp-type" className="form-control"
                   value={data.lampType} onChange={handleChangelampType}
                   placeholder="lamp type"/>
          </div>

          <label>cabinet count:</label>
          <div className="row mb-2">
            <div className="col-md-6">
              <input type="number" id="cabinet-count-width" className="form-control"
                     value={data.cbCountWidth} onChange={handleChangecbCountWidth}
                     placeholder="width"/>
            </div>
            <div className="col-md-6">
              <input type="number" id="cabinet-count-height" className="form-control"
                     value={data.cbCountHeight} onChange={handleChangecbCountHeight}
                     placeholder="height"/>
            </div>
          </div>
          <button type="submit" className="form-control bg-success text-white">Calculate</button>
          <br/>
          <hr/>
          <div id="result" style={{display: data.resDisplay}}>
            <h3>screen area: <span id="screen-area">{data.screenArea}</span></h3>
            <h3>screen resolution: <span id="screen-resolution">{data.screenResolution}</span></h3>
            <h3>cabinet resolution: <span id="cabinet-resolution">{data.cabinetResolution}</span></h3>
            <h3>lamp type: <span id="lamp-type-res">{data.lampType}</span></h3>
            <button className="form-control bg-info text-white" id="download">Download</button>
          </div>
        </form>
      </div>
  );
}

export default App;
