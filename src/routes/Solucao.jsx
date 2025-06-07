import { useState } from "react";
import  parse from 'html-react-parser';


function Solucao() {
  const [resultadoSimulacao, setResultado] = useState('');
  let resultado;
  
  function simular() {
    const cidade = document.getElementById("cidade")?.value;
    const infraestrutura = document.getElementById("infraestrutura")?.value;
    const chuva = parseFloat(document.getElementById("chuva")?.value);
    const topografia = document.getElementById("topografia")?.value;
    const corpoHidrico = document.getElementById("corpoHidrico")?.value;

    if (!cidade || !infraestrutura || isNaN(chuva) || !topografia || !corpoHidrico) {
      resultado = "<p className='text-red-600'>Por favor, preencha todos os campos corretamente.</p>";
      setResultado(resultado);
      return;
    }

    let risco = "BAIXO";

    const cidadeGrande = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"].includes(cidade);
    const cidadeMedia = ["Campinas", "Santos", "Joinville"].includes(cidade);


    if (chuva > 100) {
      risco = "ALTO";
    }

    else if (
      cidadeGrande &&
      infraestrutura === "baixa" &&
      topografia === "plana" &&
      (chuva > 30 || corpoHidrico === "sim")
    ) {
      risco = "ALTO";
    }

    else if (
      cidadeMedia &&
      infraestrutura === "baixa" &&
      corpoHidrico === "sim" &&
      chuva > 30
    ) {
      risco = "MÉDIO";
    }

    else if (
      cidadeGrande &&
      corpoHidrico === "sim" &&
      topografia === "plana" &&
      chuva > 20
    ) {
      risco = "MÉDIO";
    }

    else if (
      infraestrutura === "alta" &&
      chuva <= 30 &&
      corpoHidrico === "não"
    ) {
      risco = "BAIXO";
    }

    else if (
      infraestrutura === "média" ||
      topografia === "ondulada" ||
      corpoHidrico === "sim"
    ) {
      risco = "MÉDIO";
    }

    resultado = `
      <div className="bg-white p-4 rounded shadow mt-4">
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Infraestrutura:</strong> ${infraestrutura}</p>
        <p><strong>Topografia:</strong> ${topografia}</p>
        <p><strong>Corpo Hídrico:</strong> ${corpoHidrico}</p>
        <p><strong>Chuva:</strong> ${chuva.toFixed(1)} mm</p>
        <p className="mt-2 text-xl font-bold ${
          risco === "BAIXO" ? "text-green-600" :
          risco === "MÉDIO" ? "text-yellow-600" :
          "text-red-600"
        }">⚠️ Risco Estimado de Enchente: ${risco}</p>
        <p className="text-sm mt-2 text-gray-500 italic">*Simulação baseada em combinações de fatores urbanos, climáticos e ambientais. Protótipo visual.</p>
      </div>
    `;

    setResultado(resultado);

    console.log("Set Resultado")
  }

  return (
    <>
<section className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">🧠 Como Funciona</h2>
  <p className="mb-4">
    O <strong>Climate Simulator</strong> analisa múltiplos fatores urbanos e climáticos para prever o risco de enchentes.
    A lógica combina regras pré-definidas com modelos probabilísticos que simulam o comportamento da água em áreas urbanas.
  </p>
  <ul className="list-disc pl-6 space-y-3">
    <li>
      <strong>Porte da Cidade:</strong> Cidades grandes, como São Paulo e Rio, têm maior concentração urbana e impermeabilização do solo,
      o que aumenta a chance de alagamentos.
    </li>
    <li>
      <strong>Infraestrutura Urbana:</strong> Avalia a presença de sistemas de drenagem, manutenção urbana e canalizações.
      Uma infraestrutura precária agrava os impactos da chuva.
    </li>
    <li>
      <strong>Topografia:</strong> Regiões planas tendem a acumular água com facilidade, enquanto áreas montanhosas podem gerar
      deslizamentos em vez de enchentes clássicas.
    </li>
    <li>
      <strong>Corpos Hídricos:</strong> A proximidade de rios, córregos e lagos aumenta o risco, especialmente em períodos de cheia.
    </li>
    <li>
      <strong>Volume de Chuva:</strong> A variável mais imediata. Acima de 100 mm em 24h, o risco é automaticamente elevado,
      mesmo em cidades bem estruturadas.
    </li>
  </ul>
  <p className="mt-4 text-sm italic text-gray-500">
    *A lógica atual é baseada em regras condicionais. Nas próximas versões, será substituída por um modelo de aprendizado de máquina com dados reais.
  </p>
</section>


      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">🧪 Simule um Cenário</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <select id="cidade" className="p-3 rounded border border-gray-300">
            <option value="">Selecione a cidade</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Belo Horizonte</option>
            <option>Campinas</option>
            <option>Santos</option>
            <option>Joinville</option>
            <option>Petrolina</option>
            <option>Marabá</option>
          </select>

          <select id="infraestrutura" className="p-3 rounded border border-gray-300">
            <option value="">Infraestrutura urbana</option>
            <option value="baixa">Baixa</option>
            <option value="média">Média</option>
            <option value="alta">Alta</option>
          </select>

          <input type="number" id="chuva" placeholder="Chuva (mm)" className="p-3 rounded border border-gray-300" />

          <select id="topografia" className="p-3 rounded border border-gray-300">
            <option value="">Topografia</option>
            <option value="plana">Plana</option>
            <option value="ondulada">Ondulada</option>
            <option value="montanhosa">Montanhosa</option>
          </select>

          <select id="corpoHidrico" className="p-3 rounded border border-gray-300">
            <option value="">Corpo hídrico próximo?</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </div>

        <button onClick={simular} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          Simular Risco
        </button>

        <div id="resultado" className="mt-6 text-lg font-medium text-blue-800">
          {parse(resultadoSimulacao)}
        </div>
        </section>
    </>
  )
}

export default Solucao
