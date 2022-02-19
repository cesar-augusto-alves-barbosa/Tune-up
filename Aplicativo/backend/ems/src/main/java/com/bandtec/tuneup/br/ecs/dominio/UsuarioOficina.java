package com.bandtec.tuneup.br.ecs.dominio;


import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.Entity;
@CrossOrigin
@Entity(name = "Cliente")
public class UsuarioOficina extends Cliente {

}
//JSON PARA POST DE USUARIO:
//{
//        "cpf" : "36310062093",
//        "dataNasc" : "2020-12-31",
//        "email" : "email@email.com",
//        "nome" : "astolfo silva",
//        "senha" : "senha123",
//        "telefone" : "5892-5415"
//}