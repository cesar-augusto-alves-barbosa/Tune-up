package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.ImageVeiculos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageVeiculosRepository extends JpaRepository<ImageVeiculos, Integer> {
    List<ImageVeiculos> getImageVeiculosByPlaca(String fk);
}
