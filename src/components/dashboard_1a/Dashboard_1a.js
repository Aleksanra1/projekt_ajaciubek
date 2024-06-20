import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard_1a.css";

const soldiers = [
  {
    rank: "st.szer.pchor. ",
    firstName: "Janek",
    lastName: "Kowalski",
    unit: " zamieszkujący akademik wojskowy nr 1",
  },
  {
    rank: "st.szer.pchor.",
    firstName: "Kamil",
    lastName: "Zdonkowski ",
    unit: "zamieszkujący akademik wojskowy nr 2",
  },
  {
    rank: "st.szer.pchor.",
    firstName: "Mateusz",
    lastName: "Świetlicki",
    unit: "zamieszkujący akademik wojskowy nr 2",
  },
  {
    rank: "st.szer.pchor.",
    firstName: "Michał",
    lastName: "Kowalczyk",
    unit: "zamieszkujący akademik wojskowy nr 4",
  },
  {
    rank: "st.szer.pchor. ",
    firstName: "Tomasz",
    lastName: "Baliński",
    unit: "zamieszkujący akademik wojskowy nr 3",
  },
  {
    rank: "st.szer.pchor. ",
    firstName: "Kamil",
    lastName: "Dokański",
    unit: "zamieszkujący akademik wojskowy nr 5",
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
