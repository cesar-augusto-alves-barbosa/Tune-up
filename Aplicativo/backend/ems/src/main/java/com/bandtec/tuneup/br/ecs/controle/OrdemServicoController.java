package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.OrdemServico;
import com.bandtec.tuneup.br.ecs.repositorio.ItemServicoRepository;
import com.bandtec.tuneup.br.ecs.repositorio.OrdemServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ordens-de-servico")
@CrossOrigin
public class OrdemServicoController {

    @Autowired
    public OrdemServicoRepository repository;

    @Autowired
    public ItemServicoRepository repositoryItemServico;


    @GetMapping("/nao-concluido")
    public ResponseEntity geStatusOrdem() {

        return ResponseEntity.status(200).body(repository.findByStatusServicoIsNot("Concluido"));

    }

    @PostMapping
    public ResponseEntity postOrdemServico(@RequestBody @Valid OrdemServico novaOrdemServico) {
        repository.save(novaOrdemServico);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getAllOrdemServico() {
        List<OrdemServico>  listaOrdens = repository.findAll();
        if (listaOrdens.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(listaOrdens);
    }

    @GetMapping("/{id}")
    public ResponseEntity getPorID(@PathVariable Integer id) {
        Optional<OrdemServico> ordemServico = repository.findById(id);
        if (ordemServico == null) {
            return ResponseEntity.status(204).build();
        }
        System.out.println(ordemServico);
        return ResponseEntity.status(200).body(ordemServico);
    }


    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putOrdem(@PathVariable int id, @RequestBody OrdemServico ordemAtributo) {
        Optional<OrdemServico> ordem = repository.findById(id);
        if (ordem.isPresent()) {
            if (ordemAtributo.getDtEmissao() != null) {
                ordem.get().setDtEmissao(ordemAtributo.getDtEmissao());
            }
            if (ordemAtributo.getDtEstimada() != null) {
                ordem.get().setDtEstimada(ordemAtributo.getDtEstimada());
            }
            if (ordemAtributo.getStatusServico() != null) {
                ordem.get().setStatusServico(ordemAtributo.getStatusServico());
            }
            if (ordemAtributo.getPrecoTotal() != null) {
                ordem.get().setPrecoTotal(ordemAtributo.getPrecoTotal());
            }
            repository.save(ordem.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/deletar/{id}")
    @Transactional
    public ResponseEntity deleteOrdemServico(@PathVariable Integer id) {
        if (repository.existsById(id))  {
            repositoryItemServico.deleteItemServicoByFkOrdem(id);
            repository.deleteById(id);
            return ResponseEntity.status(200).body("Ordem de Servico " +
                    id + " excluída com sucesso!");
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
