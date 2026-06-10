document
.getElementById("consultaForm")
.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const prioridade =
    document
    .getElementById("prioridade")
    .value;

    const dados = {

        paciente:
        document
        .getElementById("paciente")
        .value,
        
        sintomas:
        document
        .getElementById("sintomas")
        .value,

        especialidade:
        document
        .getElementById("especialidade")
        .value,

        prioridade: prioridade
    };

    const resposta = await fetch("/agendar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
    });


    const resultado =
    await resposta.json();

    const resultadoDiv =
    document.getElementById("resultado");

    resultadoDiv.classList.remove(
        "normal",
        "urgente",
        "emergencia"
    );

    if(prioridade === "Normal"){

        resultadoDiv.classList.add("normal");

    }else if(prioridade === "Urgente"){

        resultadoDiv.classList.add("urgente");

    }else{

        resultadoDiv.classList.add("emergencia");
    }

    resultadoDiv.innerHTML = `
        <strong>
            ${resultado.mensagem}
        </strong>
    `;
});