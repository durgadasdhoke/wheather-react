import React from "react";
import "./Whether.css";

class Whether extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "washim",
      desc: "",
      temp: "",
      wind: "",
    };
  }

  getWhetherData() {
    
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      "washim" +
      "&appid=8a15c47a0d73f5e5f19de0b377e3cb04";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          city: data["name"],
          desc: data["weather"]["0"]["description"],
          temp: (data["main"]["temp"] - 273).toFixed(2),
          wind: data["wind"]["speed"],
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Please Check City Name");

        
      });
  }

  render() {
    return (
      <div className="content">
        <input
          type="text"
          id="cityName"
          placeholder="Enter City Name..."
          onChange={(e) => {
            this.setState({ city: e.target.value });
          }}
        />
        <button type="submit" onClick={this.getWhetherData}>
          Get Whether
        </button>

        <div id="result">
          <div>City: {this.state.city}</div>
          <div>Desc :{this.state.desc}</div>
          <div>Temp :{this.state.temp}</div>
          <div>Wind :{this.state.wind}</div>
        </div>
      </div>
    );
  }
}

export default Whether;
