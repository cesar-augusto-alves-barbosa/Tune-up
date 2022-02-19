package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.ImageVeiculos;
import com.bandtec.tuneup.br.ecs.repositorio.ImageVeiculosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/images-veiculos")
@CrossOrigin
public class ImageVeiculosController {

    @Autowired
    private ImageVeiculosRepository veiculosRepository;
    List<ImageVeiculos> imageVeiculosList = new ArrayList<>(5);

    @PostMapping("/anexo/{placa}")
    public ResponseEntity enviarAnexo(@RequestParam MultipartFile arquivo, @PathVariable String placa) throws IOException {

        ImageVeiculos imageVeiculos = new ImageVeiculos();
        imageVeiculos.setNomeArquivo(arquivo.getOriginalFilename());
        imageVeiculos.setConteudoArquivo(arquivo.getBytes());
        imageVeiculos.setTipoArquivo(arquivo.getContentType());
        imageVeiculos.setPlaca(placa);

        System.out.println("BYTES" + imageVeiculos.getConteudoArquivo());
        System.out.println("PLACA" + imageVeiculos.getPlaca());
        imageVeiculosList.add(imageVeiculos);
//        veiculosRepository.save(imageVeiculos);
        return ResponseEntity.status(201).build();
    }

    @DeleteMapping("/anexo/deleta/{posicao}")
    public ResponseEntity deletaDaLista(Integer posicao){
        imageVeiculosList.remove(posicao);
        return ResponseEntity.status(200).build();
    }

    @PostMapping("/anexo-envia")
    public ResponseEntity enviaFoto(){
        if(!imageVeiculosList.isEmpty()) {
            for(int i = 0 ; i < imageVeiculosList.size(); i++){
            veiculosRepository.save(imageVeiculosList.get(i));
            }
            return ResponseEntity.status(201).build();
        }else {
            return ResponseEntity.status(404).build();
        }
    }
    @GetMapping("/anexo/{id}")
    public ResponseEntity getImagem(@PathVariable int id) {
        byte[] img = veiculosRepository.getOne(id).getConteudoArquivo();
        return ResponseEntity.status(200).header("content-type", "image/jpeg").body(img);
    }

    @GetMapping("/anexo/placa/{placa}/{posicao}")
    public ResponseEntity getImagemPorPlaca(@PathVariable String placa, @PathVariable int posicao) {
        byte[] img = veiculosRepository.getImageVeiculosByPlaca(placa).get(posicao).getConteudoArquivo();
        return ResponseEntity.status(200).header("content-type", "image/jpeg").body(img);
    }

}
