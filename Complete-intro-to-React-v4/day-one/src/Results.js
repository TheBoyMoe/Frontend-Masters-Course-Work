import React, { Component } from "react";
import pf from "petfinder-client";

import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ location: "Seattle, WA", output: "full" })
      .then(data => {
        let pets = [];
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          pets = Array.isArray(data.petfinder.pets.pet)
            ? data.petfinder.pets.pet
            : [data.petfinder.pets.pet];
        }
        this.setState({
          pets
        });
      });
  }

  render() {
    return (
      <div className="search">
        {this.state.pets.map(pet => {
          let breed = Array.isArray(pet.breeds.breed)
            ? pet.breeds.breed.join(", ")
            : pet.breeds.breed;

          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
