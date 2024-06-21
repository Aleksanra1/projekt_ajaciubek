import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard_2a.css";

const soldiers = [
  {
    rank: "1. ",
    firstName: "akademik wojskowy nr 1",
    lastName: "ul.Gen.S.Kaliskiego 5, Warszawa",
    unit: " 01-476",
  },
  {
    rank: "2.",
    firstName: "akademik wojskowy nr 2",
    lastName: "ul.Gen.S.Kaliskiego 5, Warszawa",
    unit: " 01-476",
  },
  {
    rank: "3.",
    firstName: "akademik wojskowy nr 3",
    lastName: "ul.Gen.S.Kaliskiego 5, Warszawa",
    unit: " 01-476",
  },
  {
    rank: "4.",
    firstName: "akademik wojskowy nr 4",
    lastName: "ul.Gen.S.Kaliskiego 5, Warszawa",
    unit: " 01-476",
  },
  {
    rank: "5. ",
    firstName: "akademik wojskowy nr 5",
    lastName: "ul.Gen.S.Kaliskiego 5, Warszawa",
    unit: " 01-476",
  },
  {
    rank: "6. ",
    firstName: "akademik wojskowy nr 6",
    lastName: "ul.Gen.S.Kaliskiego 5, Warszawa",
    unit: " 01-476",
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
        <h1>BAZA AKADEMIKÓW</h1>
        <div className="buttons">
          <button className="button" onClick={() => navigate("/services")}>
            DOSTĘPNE USŁUGI
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Lp.</th>
            <th>Numer akademika</th>
            <th>Adres</th>
            <th>Kod pocztowy</th>
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
