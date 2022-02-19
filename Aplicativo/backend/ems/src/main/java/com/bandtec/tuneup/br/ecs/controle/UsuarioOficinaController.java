package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.*;
import com.bandtec.tuneup.br.ecs.repositorio.UsuarioOficinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.validation.Valid;
import java.io.*;
import java.util.*;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UsuarioOficinaController {
    public UsuarioOficina usuarioLogin1;

    private ListaObj<UsuarioOficina> usuarioCadastrado = new ListaObj<UsuarioOficina>(10);
    FileReader teste = null;

    public static void gravaLista(ListaObj<UsuarioOficina> lista, boolean isCSV, String nomeArquivo) {

        FileWriter arq = null;
        Formatter saida = null;
        boolean deuErro = false;


        if (isCSV) {
            nomeArquivo += ".csv";
        } else {
            nomeArquivo += ".txt";
        }

        try {
            arq = new FileWriter(nomeArquivo, true);
            saida = new Formatter(arq);
        } catch (IOException erro) {
            System.err.println("Erro ao abrir arquivo");
            System.exit(1);
        }

        try {
            for (int i = 0; i < lista.getTamanho(); i++) {
                UsuarioOficina u = lista.getElemento(i);

                if (isCSV) {
                    saida.format("%d;%s;%s;%s;%s;%s;",
                            u.getId(), u.getNome(), u.getDataNasc(),
                            u.getEmail(), u.getTelefone(),
                            u.getCpf());
                } else {
                    saida.format("%d;%s;%s;%s;%s;%s;",
                            u.getId(), u.getNome(), u.getDataNasc(),
                            u.getEmail(), u.getTelefone(),
                            u.getCpf());
                }
            }
        } catch (FormatterClosedException erro) {
            System.err.println("Erro ao gravar no arquivo");
            deuErro = true;
        } finally {
            saida.close();
            try {
                arq.close();
            } catch (IOException erro) {
                System.err.println("Erro ao fechar arquivo.");
                deuErro = true;
            }
            if (deuErro) {
                System.exit(1);
            }
        }
    }

    public static void gravaRegistro(String nomeArq, String registro) {
        BufferedWriter saida = null;
        try {
            // o argumento true é para indicar que o arquivo não será sobrescrito e sim
            // gravado com append (no final do arquivo)
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException e) {
            System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
        }

        try {
            saida.append(registro + "\n");
            saida.close();

        } catch (IOException e) {
            System.err.printf("Erro ao gravar arquivo: %s.\n", e.getMessage());
        }
    }

    public void geraRegistro(ListaObj<UsuarioOficina> lista) {
        String nomeArq = "usuario.txt";
        String header = "";
        String corpo = "";
        String trailer = "";
        int contRegDados = 0;

        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        if (lista.getTamanho() > 0) {
            for (int i = 0; i < lista.getTamanho(); i++) {
                header += "00USUARIO2021";
                header += formatter.format(dataDeHoje);
                header += "01";
                gravaRegistro(nomeArq, header);

                corpo += "02";
                corpo += String.format("%-2s", lista.getElemento(i).getId());
                corpo += String.format("%-30s", lista.getElemento(i).getNome());
                corpo += String.format("%-8s", lista.getElemento(i).getDataNasc());
                corpo += String.format("%-20s", lista.getElemento(i).getEmail());
                corpo += String.format("%-9s", lista.getElemento(i).getTelefone());
                corpo += String.format("%-15s", lista.getElemento(i).getCpf());

                contRegDados++;
                gravaRegistro(nomeArq, corpo);

                // monta o trailer
                trailer += "01";
                trailer += String.format("%010d", contRegDados);
                gravaRegistro(nomeArq, trailer);
            }
        } else {
            System.out.println("Lista vazia");
        }
    }

    @Autowired
    public UsuarioOficinaRepository repository;

    List<UsuarioOficina> usuarios;
    List<UsuarioOficina> logados;

    @PostMapping
    public ResponseEntity postUsuario(@RequestBody @Valid UsuarioOficina novoUsuario) {
        repository.save(novoUsuario);
        usuarioCadastrado.adiciona(novoUsuario);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getUsuarios() {
        usuarios = repository.findAll();
        if (usuarios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        if (usuarioCadastrado.getTamanho() == 0) {
            System.out.println("\nLista vazia");
        } else {
            usuarioCadastrado.exibe();
        }
        return ResponseEntity.status(200).body(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity getPorID(@PathVariable Integer id) {
        Optional<UsuarioOficina> user = repository.findById(id);
        if (user == null) {
            return ResponseEntity.status(204).build();
        }
        System.out.println(user);
        return ResponseEntity.status(200).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity loginUsuario(@RequestBody UsuarioOficina usuarioLogin) {
        usuarioLogin1 = repository.findByEmailAndSenha(usuarioLogin.getEmail(), usuarioLogin.getSenha());
        if (usuarioLogin1 != null) {
            Cliente.sessao = usuarioLogin1.getId();
            usuarioLogin1.setLogado(true);
            repository.save(usuarioLogin1);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.badRequest().body("erro no login");
        }
        }

    @GetMapping("/usuario/{email}")
    public ResponseEntity getUser(@PathVariable String email) {
        UsuarioOficina usuario = repository.findByEmail(email);
        if ( usuario != null) {
            return ResponseEntity.status(200).body(repository.findById(usuario.getId()));
        }
        return ResponseEntity.status(404).build();
    }

    @GetMapping("/logados")
    public ResponseEntity getLogados() {
        logados = repository.findAllByLogado(true);
        if (logados.isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(logados);
        }
    }

    @GetMapping("/logout/{email}/{senha}")
    public ResponseEntity logoutUsuario(@PathVariable String email, @PathVariable String senha) {
        UsuarioOficina usuarioLogout = repository.findByEmailAndSenha(email, senha);
        if (usuarioLogout == null) {
            return ResponseEntity.status(401).build();
        } else {
            Cliente.sessao = null;
            usuarioLogout.setLogado(false);
            repository.save(usuarioLogout);
            return ResponseEntity.status(200).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Integer id){
        Optional<UsuarioOficina> usuarioDelete = repository.findById(id);
        if (usuarioDelete == null) {
            return ResponseEntity.status(401).build();
        } else {
            repository.deleteById(id);
            return  ResponseEntity.status(200).build();
        }
    }

    @DeleteMapping("/delete/{email}/{senha}")
    public ResponseEntity deleteUsuario(@PathVariable String email, @PathVariable String senha) {
        UsuarioOficina usuarioDelete = repository.findByEmailAndSenha(email, senha);
        if (usuarioDelete == null) {
            return ResponseEntity.status(401).build();
        } else {
            usuarioDelete.setLogado(false);
            repository.delete(usuarioDelete);
            for (int i = 0; i >= usuarioCadastrado.getTamanho(); i++) {
                if (usuarioCadastrado.getElemento(i) == usuarioDelete) {
                    usuarioCadastrado.removePeloIndice(i);
                    usuarioCadastrado.exibe();
                } else {
                    System.out.println("Usuário não encontrado :( ");
                }
            }
            return ResponseEntity.status(200).build();
        }
    }

    @GetMapping("/download")
    @ResponseBody
    public ResponseEntity geraCsv() {
        gravaLista(usuarioCadastrado, true, "usuario");
        Path path = Paths.get("usuario.csv");
        Resource resource = null;
        geraRegistro(usuarioCadastrado);
        try {
            resource = new UrlResource(path.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putUsuario(@PathVariable int id, @RequestBody UsuarioOficina usuarioAtributo) {
        Optional<UsuarioOficina> usuarioOficina = repository.findById(id);
        if (usuarioOficina.isPresent()) {
            if(usuarioAtributo.getNome() != null) {
                usuarioOficina.get().setNome(usuarioAtributo.getNome());
            }
            if(usuarioAtributo.getDataNasc() != null) {
                usuarioOficina.get().setDataNasc(usuarioAtributo.getDataNasc());
            }
            if(usuarioAtributo.getEmail() != null) {
                usuarioOficina.get().setEmail(usuarioAtributo.getEmail());
            }
            if(usuarioAtributo.getCpf() != null) {
                usuarioOficina.get().setCpf(usuarioAtributo.getCpf());
            }
            if(usuarioAtributo.getTelefone() != null) {
                usuarioOficina.get().setTelefone(usuarioAtributo.getTelefone());
            }
            if(usuarioAtributo.getSenha() != null){
                usuarioOficina.get().setSenha(usuarioAtributo.getSenha());
            }
            repository.save(usuarioOficina.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
//
//    @GetMapping("/{fk}")
//    public ResponseEntity listServico(@PathVariable Integer fk) {
//        List<Object> servicos = jdbcTemplate.query("select * from Servico where fk_oficina = " +
//                fk, (rs, rowNum) ->
//                criaServico(rs.getInt("id"), rs.getInt("fk_oficina"),rs.getString("descricao_servico")));
//        return ResponseEntity.status(200).body(servicos);
//    }

    @GetMapping("/get-last-id")
    public ResponseEntity getUsuariosLastId() {
        Integer id;
        usuarios = repository.findAll();
        if (usuarios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        id = usuarios.get(repository.findAll().size()-1).getId();
        return ResponseEntity.status(200).body(id);
    }

    @GetMapping("/cpf/{cpf}")
    public ResponseEntity getPorCpf(@PathVariable String cpf){
            return ResponseEntity.status(200).body(repository.findUsuarioOficinaByCpf(cpf).getId());
    }
}

