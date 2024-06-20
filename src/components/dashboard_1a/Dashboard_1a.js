import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard_1a.css";

const soldiers = [
  {
    rank: "Szeregowy ",
    firstName: "Jacek",
    lastName: "Nieznany",
    unit: "Jednostka Wojskowa 1",
  },
  {
    rank: "Sierżant",
    firstName: "Joanna",
    lastName: "Smiałek ",
    unit: "2 Brygada Zmechanizowana",
  },
  {
    rank: "Kapitan",
    firstName: "Michał",
    lastName: "Jakubczyj",
    unit: "5 Pułk Rozpoznawczy",
  },
  {
    rank: "Pułkownik",
    firstName: "Andrzej",
    lastName: "Piotrowski",
    unit: "Jednostka Wojskowa 8",
    sorted: true,
    missingItems: "Brak",
  },
  {
    rank: "Generał brygady",
    firstName: "Paweł",
    lastName: "Grabowski",
    unit: "Jednostka Wojskowa 9",
    sorted: true,
    missingItems: "Brak",
  },
];

const DatabaseSoldier = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredSoldiers = soldiers.filter(
    (soldier) =>
      soldier.rank.toLowerCase().includes(searchTerm.toLowerCase()) ||
      soldier.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      soldier.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      soldier.unit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="header">
        <h1>BAZA ŻOŁNIERZY</h1>
        <div className="buttons">
          <button className="button" onClick={() => navigate("/services")}>
            DOSTĘPNE USŁUGI
          </button>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Szukaj..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Stopień</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>NUMER AKADEMIKA W KTÓRYM MIESZKA PODCHORĄZY</th>
          </tr>
        </thead>
        <tbody>
          {filteredSoldiers.map((soldier, index) => (
            <tr key={index}>
              <td>{soldier.rank}</td>
              <td>{soldier.firstName}</td>
              <td>{soldier.lastName}</td>
              <td>{soldier.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseSoldier;
