package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Servico;
import com.bandtec.tuneup.br.ecs.repositorio.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/servicos")
@CrossOrigin
public class ServicoController {

    @Autowired
    public ServicoRepository repository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    Integer fkOficina = null;

    @PostMapping
    public ResponseEntity postOrdemServico(@RequestBody @Valid Servico novoServico) {
        repository.save(novoServico);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getAllOrdemServico() {
        List<Servico> listaServico = repository.findAll();
        if (listaServico.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(listaServico);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity getPorID(@PathVariable Integer id) {
        Optional<Servico> servico = repository.findById(id);
        if (servico == null) {
            return ResponseEntity.status(204).body("vazio");
        }
        System.out.println(servico);
        return ResponseEntity.status(200).body(servico);
    }


    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putOrdem(@PathVariable int id, @RequestBody Servico ordemServico) {
        Optional<Servico> servico = repository.findById(id);
        if (servico.isPresent()) {
            if (ordemServico.getFkOficina() != null) {
                servico.get().setFkOficina(ordemServico.getFkOficina());
            }
            if (ordemServico.getDescricaoServico() != null) {
                servico.get().setDescricaoServico(ordemServico.getDescricaoServico());
            }
            repository.save(servico.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity deleteOrdemServico(@PathVariable Integer id) {
        if (repository.findById(id).isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.status(200).body("Servico " +
                    id + " excluído com sucesso!");
        } else {
            return ResponseEntity.status(401).build();
        }
    }

    public Servico criaServico(Integer id, Integer fkOficina, String desc) {
        Servico servico = new Servico();
        servico.setId(id);
        servico.setDescricaoServico(desc);
        servico.setFkOficina(fkOficina);
        return servico;
    }

    @GetMapping("/{fk}")
    public ResponseEntity listServico(@PathVariable Integer fk) {
        List<Object> servicos = jdbcTemplate.query("select * from Servico where fk_oficina = " +
                fk, (rs, rowNum) ->
                criaServico(rs.getInt("id"), rs.getInt("fk_oficina"), rs.getString("descricao_servico")));
        return ResponseEntity.status(200).body(servicos);
    }

    @PostMapping("/list")
    public ResponseEntity postServicos(@RequestBody Map<String, Object>[] servicos) {
        AtomicBoolean err = new AtomicBoolean(false);
        Arrays.stream(servicos).forEach(jsonValueObjectMap -> {
            String servico = "Err";
            Integer fkOficina = 0;
            servico = String.valueOf(jsonValueObjectMap.getOrDefault("descricaoServico", servico));
            fkOficina = Integer.parseInt((String) jsonValueObjectMap.getOrDefault("fkOficina", fkOficina));
            System.out.println(fkOficina);
            if (fkOficina.equals(0) || servico.equalsIgnoreCase("Err")) {
                err.set(true);
            }
            if (!err.get()) {
                Servico novoServico = new Servico();
                novoServico.setDescricaoServico(servico);
                novoServico.setFkOficina(fkOficina);
                repository.save(novoServico);
            }
        });
        if (err.get()) {
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.status(201).build();
    }
}
