package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {
    Veiculo findByPlaca(String placa);
    Veiculo findByFkCliente(Integer fkCliente);
    void deleteVeiculoByFkCliente(Integer fk);
    void deleteVeiculoByPlaca(String placa);
}
