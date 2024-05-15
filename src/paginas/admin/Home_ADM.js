import React, { useState, useEffect } from "react";
import NavBar from "../../componentes/navbar/navbar";
import Certificados from "../../componentes/corpo_certificados/certificados";
import axios from "axios";  
import { toast } from 'react-toastify';

export default function HomeADM ({itensMenu}){
    const [certificadosData, setCertificadosData] = useState([]);

    const notierror = () => toast.error('Erro ao buscar os eventos!');

    useEffect(() => {
        const fetchCertificados = async () => {
        try {
            const response = await axios.get("http://18.228.10.97:3000/api/presences", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
            });
            setCertificadosData(response.data);
        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
            notierror();
        }
        };

        fetchCertificados();
    }, []);

    return(
        <body>
            <NavBar itensMenu={itensMenu} cor={"#4F1313"}/>
            <Certificados certificadosData={certificadosData}/>
        </body>
    );
}