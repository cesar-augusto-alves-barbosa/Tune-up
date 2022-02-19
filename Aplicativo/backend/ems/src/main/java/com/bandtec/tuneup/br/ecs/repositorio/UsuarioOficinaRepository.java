package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioOficinaRepository extends JpaRepository<UsuarioOficina, Integer> {
    UsuarioOficina findByEmailAndSenha(String email, String pass);
    UsuarioOficina findByEmail(String email);
    UsuarioOficina findByLogado (Boolean logado);
    List<UsuarioOficina> findAllByLogado(Boolean logado);
    UsuarioOficina findUsuarioOficinaByCpf(String cpf);
}
