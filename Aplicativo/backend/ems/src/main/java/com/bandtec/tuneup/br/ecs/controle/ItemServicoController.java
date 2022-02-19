package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.ItemServico;
import com.bandtec.tuneup.br.ecs.repositorio.ItemServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/item-servico")
@CrossOrigin
public class ItemServicoController {

    @Autowired
    private ItemServicoRepository repository;

    @GetMapping
    public ResponseEntity getItens() {
        if (!repository.findAll().isEmpty()) {
            return ResponseEntity.status(200).body(repository.findAll());
        } else {
            return ResponseEntity.status(204).body(repository.findAll());
        }
    }

    @GetMapping("/ordem/{fk}")
    public ResponseEntity getByOrdem(@PathVariable Integer fk) {
        List<ItemServico> item = repository.findByFkOrdem(fk);
        if (!item.equals(null)) {
            return ResponseEntity.status(200).body(item);
        }else{
        return ResponseEntity.status(404).build();
        }
    }


    @GetMapping("/servico/{fk}")
    public ResponseEntity getByServico(@PathVariable Integer fk) {
        List<ItemServico> item = repository.findByFkServico(fk);
        if (!item.equals(null)) {
            return ResponseEntity.status(200).body(item);
        }else{
            return ResponseEntity.status(404).build();
        }
    }
}
