import React from "react";
import NavBar from "../../componentes/navbar/navbar";
import Relatorio from "../../componentes/corpo_relatorio/relatorio";

//colocar a requisição http
const certificadosData = [
    { curso: "Aprendizado de Máquina", professor: "João Silva", data: new Date("01/01/2022") },
    { curso: "Desenvolvimento Web", professor: "João Silva", data: new Date("05/02/2023") },
    { curso: "Inteligência Artificial", professor: "João Silva", data: new Date("10/03/2022") },
    { curso: "Desenvolvimento Web", professor: "João Silva", data: new Date("05/02/2022") },
  ];
 
export default function RelatoriosProf ({itensMenu}){
    return(
        <body>
            <NavBar itensMenu={itensMenu} cor={"#14134F"}/>
            <Relatorio certificadosData={certificadosData} showProfessorSearch={false} />
        </body>
    );
} 