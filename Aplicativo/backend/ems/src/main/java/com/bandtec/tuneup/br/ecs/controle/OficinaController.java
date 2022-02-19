package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Oficina;
import com.bandtec.tuneup.br.ecs.dominio.Servico;
import com.bandtec.tuneup.br.ecs.repositorio.OficinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicBoolean;

@RestController
@RequestMapping("/oficinas")
@CrossOrigin
public class OficinaController {

    @Autowired
    public OficinaRepository repository;

    List<Oficina> oficinas;

    @PostMapping
    public ResponseEntity postOficina(@RequestBody @Valid Oficina novaOficina) {
        repository.save(novaOficina);
        return ResponseEntity.status(201).body(repository.findByEmail(novaOficina.getEmail()).getId());
    }

    @GetMapping
    public ResponseEntity getOficina() {
        oficinas = repository.findAll();
        if (oficinas.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(oficinas);
    }


    @GetMapping("/{id}")
    public ResponseEntity getPorID(@PathVariable Integer id) {
        Optional<Oficina> oficina = repository.findById(id);
        if (oficina == null) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(oficina);
    }

    @GetMapping("/search/nome/{nome}")
    public ResponseEntity getPorNome(@PathVariable String nome){
        List<Oficina> oficina = repository.findAllByNome(nome);
        if (oficina == null) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(oficina);
    }

    @GetMapping("/search/bairro/{bairro}")
    public ResponseEntity getPorBairro(@PathVariable String bairro){
        List<Oficina> oficina = repository.findAllByNome(bairro);
        if (oficina == null) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(oficina);
    }

    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putoficina(@PathVariable int id, @RequestBody Oficina oficinaAtributo) {
        Optional<Oficina> oficina = repository.findById(id);
        if (oficina.isPresent()) {
            if (oficinaAtributo.getNome() != null) {
                oficina.get().setNome(oficinaAtributo.getNome());
            }
            if (oficinaAtributo.getRazaoSocial() != null) {
                oficina.get().setRazaoSocial(oficinaAtributo.getRazaoSocial());
            }
            if (oficinaAtributo.getEmail() != null) {
                oficina.get().setEmail(oficinaAtributo.getEmail());
            }
            if (oficinaAtributo.getCnpj() != null) {
                oficina.get().setCnpj(oficinaAtributo.getCnpj());
            }
            if (oficinaAtributo.getIe() != null) {
                oficina.get().setIe(oficinaAtributo.getIe());
            }
            if (oficinaAtributo.getCep() != null) {
                oficina.get().setCep(oficinaAtributo.getCep());
            }
            if (oficinaAtributo.getRua() != null) {
                oficina.get().setRua(oficinaAtributo.getRua());
            }
            if (oficinaAtributo.getBairro() != null) {
                oficina.get().setBairro(oficinaAtributo.getBairro());
            }
            if (oficinaAtributo.getComplemento() != null) {
                oficina.get().setComplemento(oficinaAtributo.getComplemento());
            }
            if (oficinaAtributo.getNumero() != null) {
                oficina.get().setNumero(oficinaAtributo.getNumero());
            }
            if (oficinaAtributo.getTelefone() != null) {
                oficina.get().setTelefone(oficinaAtributo.getTelefone());
            }

            repository.save(oficina.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity deleteOficina(@PathVariable Integer id) {
        if (repository.findById(id).isPresent()) {
            String nome = repository.findById(id).get().getNome();
            repository.deleteById(id);
            return ResponseEntity.status(200).body("Oficina " +
                    nome + " excluída com sucesso!");
        } else {
            return ResponseEntity.status(401).build();
        }
    }

    @DeleteMapping("deletar/fk/{fk}")
    public ResponseEntity deleteByFk(@PathVariable Integer fk){
        if(!repository.findOficinaByFkPrope(fk).equals(null)){
            repository.deleteOficinaByFkPrope(fk);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }

}
