import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard_3a.css";

const soldiers = [
  {
    rank: "1.",
    firstName: "kompania nr 7",
    lastName: "akademik wojskowy nr 1",
    unit: " ulica Gen.S.Kaliskiego 5, Warszawa",
  },
  {
    rank: "2.",
    firstName: "kompania nr 1",
    lastName: "akademik wojskowy nr 3 ",
    unit: "ulica Gen.S.Kaliskiego 5, Warszawa",
  },
  {
    rank: "3.",
    firstName: "kompania nr 4",
    lastName: "akademik wojskowy nr 2",
    unit: "ulica Gen.S.Kaliskiego 5, Warszawa",
  },
  {
    rank: "4.",
    firstName: "kompania nr 3",
    lastName: "akademik wojskowy nr 5",
    unit: "ulica Gen.S.Kaliskiego 5, Warszawa",
  },
  {
    rank: "5. ",
    firstName: "kompania nr 9",
    lastName: "akademik wojskowy nr 6",
    unit: "ulica Gen.S.Kaliskiego 5, Warszawa",
  },
  {
    rank: "6. ",
    firstName: "kompania nr 5",
    lastName: "akademik wojskowy nr 4",
    unit: "ulica Gen.S.Kaliskiego 5, Warszawa",
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
        <h1>BAZA KOMPANII</h1>
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
            <th>Numer kompanii</th>
            <th>Numer akademika w którym się znajduje</th>
            <th>Adres akademika</th>
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
