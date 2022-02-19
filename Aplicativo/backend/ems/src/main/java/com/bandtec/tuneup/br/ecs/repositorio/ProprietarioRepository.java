package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.Proprietario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProprietarioRepository extends JpaRepository<Proprietario, Integer> {
    Proprietario findByEmailAndSenha(String email, String pass);
    Proprietario findByEmail(String email);
    Proprietario findByLogado (Boolean logado);
    List<Proprietario> findAllByLogado(Boolean logado);
    List<Proprietario> findProprietarioByNivelAcessoIsNot(Integer nivel);
}
