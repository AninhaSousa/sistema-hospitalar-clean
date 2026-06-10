const ConsultaFactory = require("./ConsultaFactory");
const PrioridadeNormal = require("../domain/PrioridadeNormal");
const PrioridadeUrgente = require("../domain/PrioridadeUrgente");
const PrioridadeEmergencia = require("../domain/PrioridadeEmergencia");

class HospitalFacade {
  constructor(gerenciadorConsultas, servicoNotificacaoHttp) {
    this.gerenciador = gerenciadorConsultas;
    this.notificadorHttp = servicoNotificacaoHttp;
  }

  async agendar(dados) {
    const consulta = ConsultaFactory.criarConsulta(dados.especialidade);
    let estrategia;

    switch (dados.prioridade) {
      case "Urgente":
        estrategia = new PrioridadeUrgente();
        break;
      case "Emergência":
        estrategia = new PrioridadeEmergencia();
        break;
      default:
        estrategia = new PrioridadeNormal();
    }

    consulta.paciente = dados.paciente;
    consulta.sintomas = dados.sintomas;
    consulta.prioridade = estrategia.definir();

    this.gerenciador.adicionar(consulta);

    if (this.notificadorHttp) {
      this.notificadorHttp.enviarNotificacao(`Nova consulta triada: Paciente ${dados.paciente} com prioridade ${consulta.prioridade}`);
    }

    return consulta;
  }
}

module.exports = HospitalFacade;