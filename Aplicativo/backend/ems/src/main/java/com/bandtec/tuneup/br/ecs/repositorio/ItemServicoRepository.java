package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.ItemServico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemServicoRepository extends JpaRepository<ItemServico, Integer> {
    List<ItemServico> findByFkOrdem(Integer fkOrdem);

    List<ItemServico> findByFkServico(Integer fkServico);

    void deleteItemServicoByFkOrdem(Integer fk);
}
