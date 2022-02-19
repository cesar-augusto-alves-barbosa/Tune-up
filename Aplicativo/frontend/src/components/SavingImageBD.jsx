import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import api from "../services/api";
/* import "antd/dist/antd.css" */
import { Link } from 'react-router-dom';
export default function Demo({ nome, cpf, dtEmissao, dtEstimada, preco, precoTotal, statusServico, marca, cor, modelo, ano, categoria, placa, ...props }) {

  // const estilo = {  
  //   "display": "flex",
  //   "align-items": "center",
  //   "justify-content": "center",
  //   "height": "100%",
  //   "text-align": "center",
  //   "box-sizing": "border-box",
  //   "margin": 0,
  //   "padding": 0,
  //   "color": "rgba(0, 0, 0, 0.85)",
  //   "font-size": "14px",
  //   "font-variant": "tabular-nums",
  //   "line-height":1.5715,
  //   "list-style": "none",
  //   "outline": 0}

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    console.log("NOVO FILE LIST", newFileList);
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };


  const [usuario, getUsuario] = useState([]);



  async function envia() {
    try {
      const resposta = await api.post(`/images-veiculos/anexo-envia`, {
        ...fileList,
      });
      if (resposta.status === 201) {
        console.log("DEU")
      }
    } catch (err) {
      alert("Erro", err);
    }
  }

  async function cadastro() {
    var idCarroNovo;
    var idCliente;
    try {
      const respostaUser = await api.get(`/usuarios/cpf/${cpf}`);
      getUsuario(respostaUser.data);
      if (respostaUser === 200) {
        idCliente = respostaUser.data;
        // console.log(usuario.id);
      }
      try {
        const resposta = await api.post(`/veiculos`, {
          marca: marca,
          modelo: modelo,
          ano: ano,
          cor: cor,
          categoria: categoria,
          placa: placa,
          statusServico: statusServico,
          fkCliente: respostaUser.data
        });
        if (resposta.status === 201) {
          console.log("Veiculo deu certo", resposta.data)
          idCarroNovo = resposta.data;
          envia();

          try {
            const resposta = await api.post(`/ordens-de-servico`, {
              nome: nome,
              cpf: cpf,
              dtEmissao: dtEmissao,
              dtEstimada: dtEstimada,
              preco: preco,
              precoTotal: precoTotal,
              statusServico: statusServico,
              fkClienteordem: respostaUser.data,
              fkVeiculoOrdem: idCarroNovo
            });
            if (resposta.status === 201) {
              console.log("cad feito")
              window.location.href = "/ordem-de-servico"
            } else {
              alert(resposta.status)
            }
          } catch (err) {
            alert("Erro ao cadastrar ordem");
          }
        } else {
          alert(resposta.status)
        }
      } catch (err) {
        alert("Erro ao cadastrar carro");
      }
    } catch {
      alert("ERRO, adicione um cpf válido")
    }
  }


  return (
    <>
      <ImgCrop grid>
        <Upload
          name="arquivo"
          id="arquivo"
          action={`http://localhost:8080/images-veiculos/anexo/${placa}`}
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        // style={estilo}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload>
      </ImgCrop>
      <div className="buttons-order">
        <Link to="/ordem-de-servico"><button name="cancel" id="cancelOrder" className="cancel-order">Cancelar Serviço</button></Link>
        <button name="adding" id="addOrder" onClick={cadastro} className="add-order">Adicionar Serviço</button>
      </div>
    </>
  );
};