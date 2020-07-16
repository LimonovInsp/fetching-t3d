import React from 'react';
import { Material } from '../../interfaces';
import "./MaterialsList.css";

interface Props {
  materials: Material[];
}

export const MaterialsList: React.FC<Props> = ({ materials }) => (
  <ul className="App__list">
    {materials.map(material => (
      <li className="App__item" key={material._id}>
        <img
          className="App__image"
          alt={material.description}
          src={'https://api.t3d.live/' + material.icon}
        />
        <h3
          className="App__headline"
        >
          {material.name
          .replace(/_/g, ' ')
          .split(' ')
          .map(word => word
          .replace(word[0], word[0]
          .toUpperCase()))
          .join(' ')}
        </h3>
        <p className="App__paragraph">
          {material.description.replace(/_/g, ' ')}
        </p>
      </li>
    ))}
  </ul>
);
