import axios from "axios";

async function pegaDadosCepV2(cep) {
    try {
      console.log("Pegando dados do cepv2")
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 500) {
        return pegaDadosCepV1(cep)
      }
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        return {erro: false}
      }
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return {erro: false}
      }
      console.error('Erro ao obter dados do CEP:', error);
      throw error;
    }
}

async function pegaDadosCepV1(cep) {
  try {
    console.log("Pegando dados do cepv1")
    const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados do CEP:', error);
    return {erro: false}
    throw error;
  }
}
  

async function pegaDadosCidade(cityName) {
    let cityNameConverted = cityName.toLowerCase().replace(/\s/g, '_');
    try {
      console.log("Pegando dados da cidade")
      const response = await axios.get(`https://brasilapi.com.br/api/cptec/v1/cidade/${cityNameConverted}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter dados da cidade:', error);
      throw error;
    }
}
  
async function pegaDadosPrevisao(cityCode, days) {
    try {
      console.log("Pegando dados da previsão")
      const response = await axios.get(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}/${days}`);
      console.log(await response.data.clima[0].condicao_desc)
      return response.data;
    } catch (error) {
      console.error('Erro ao obter dados de previsão:', error);
      throw error;
    }
}
  

export {
    pegaDadosCepV2,
    pegaDadosCidade,
    pegaDadosPrevisao
}