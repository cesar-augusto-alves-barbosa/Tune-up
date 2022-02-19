package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.OrdemServico;
import com.bandtec.tuneup.br.ecs.dominio.Proprietario;
import com.bandtec.tuneup.br.ecs.dominio.Veiculo;
import com.bandtec.tuneup.br.ecs.repositorio.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    public VeiculoRepository repository;

    List<Veiculo> veiculos;

    @PostMapping
    public ResponseEntity postVeiculo(@RequestBody @Valid Veiculo veiculoNovo){
//        veiculos.add(veiculoNovo);
        repository.save(veiculoNovo);
        return ResponseEntity.status(201).body(veiculoNovo.getId());
    }

    @Autowired
    JdbcTemplate jdbcTemplate;

//    @GetMapping("/last-id")
//    public Integer  getVeiculoComLastId(){
//        return jdbcTemplate.query("select IDENT_CURRENT ('Veiculo')",
//                (rs, rowNum) -> id(rs.absolute(1))
//    }

    @GetMapping
    public ResponseEntity getVeiculos() {
        veiculos = repository.findAll();
        if (veiculos.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(veiculos);
    }

    @GetMapping("/{id}")
    public ResponseEntity getPorID(@PathVariable Integer id) {
        Optional<Veiculo> veiculo = repository.findById(id);
        System.out.println(veiculo);
        if (veiculo == null) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(veiculo);
    }

    @GetMapping("/fk/{fkCliente}")
    public ResponseEntity getPorFk(@PathVariable Integer fkCliente) {
        Veiculo veiculo = repository.findByFkCliente(fkCliente);
        System.out.println(veiculo);
        if (veiculo == null) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(veiculo);
    }

    @GetMapping("/placa/{placa}")
    public ResponseEntity getVeiculo(@PathVariable String placa){
        Veiculo veiculo  = repository.findByPlaca(placa);
        if (veiculo == null) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(veiculo);
    }

    @DeleteMapping("/{fk}")
    @Transactional
    public ResponseEntity deleteByFkCliente(@PathVariable Integer fk){
        if(!repository.findByFkCliente(fk).equals(null)){
            repository.deleteVeiculoByFkCliente(fk);
            return ResponseEntity.status(200).body("Veículo de fkCliente: " + fk +" excluído!");
        }else{
            return ResponseEntity.status(400).build();
        }
    }

    @DeleteMapping("/deletar/{placa}")
    public ResponseEntity deleteVeiculo(@PathVariable String placa){
        if(!repository.findByPlaca(placa).equals(null)){
            repository.deleteVeiculoByPlaca(placa);
            return ResponseEntity.status(200).body("Veículo de placa: " + placa +" excluído!");
        }
        return ResponseEntity.status(400).build();
    }
    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putVeiculo(@PathVariable int id, @RequestBody Veiculo veiculoAtributo) {
        Optional<Veiculo> veiculo = repository.findById(id);
        if (veiculo.isPresent()) {
            if(veiculoAtributo.getMarca() != null) {
                veiculo.get().setMarca(veiculoAtributo.getMarca());
            }
            if(veiculoAtributo.getModelo() != null) {
                veiculo.get().setModelo(veiculoAtributo.getModelo());
            }
            if(veiculoAtributo.getAno() != null) {
                veiculo.get().setAno(veiculoAtributo.getAno());
            }
            if(veiculoAtributo.getPlaca() != null) {
                veiculo.get().setPlaca(veiculoAtributo.getPlaca());
            }
            if(veiculoAtributo.getCor() != null) {
                veiculo.get().setCor(veiculoAtributo.getCor());
            }
            if(veiculoAtributo.getCategoria() != null) {
                veiculo.get().setCategoria(veiculoAtributo.getCategoria());
            }

            repository.save(veiculo.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

}
