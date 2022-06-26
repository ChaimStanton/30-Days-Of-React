import React from "react";
import { countriesData } from "./data/countries";
import { selectRandomElement } from "./helperFunctions";

export class CountrySection extends React.Component {
  state = { count: 0, selectedCountry: selectRandomElement(countriesData) };

  changeCountry = () => {
    while (true) {
      const potentialNewCountry = selectRandomElement(countriesData);
      if (potentialNewCountry.name !== this.state.selectedCountry.name) {
        this.setState({ selectedCountry: potentialNewCountry });
        return;
      }
    }
    // this.setState({ selectedCountry: selectRandomElement(countriesData) });
  };
  render() {
    return (
      <div>
        <CountryCard data={this.state.selectedCountry} />
        <button onClick={this.changeCountry}>
          {" "}
          Click here to change country
        </button>
      </div>
    );
  }
}

function CountryCard(props) {
  return (
    <div className="countryCard">
      <img src={props.data.flag} alt={"flag of" + props.data.name} />
      <h2>{props.data.name.toUpperCase()}</h2>
      <div className="textLines">
        <b>Capital:</b>
        <p>{props.data.capital}</p>
        <b>Language(s):</b>
        <p>{props.data.languages}</p>
        <b>Population:</b>
        <p>{props.data.population}</p>
        <b>Currency:</b>
        <p>{props.data.currency}</p>
      </div>
    </div>
  );
}
