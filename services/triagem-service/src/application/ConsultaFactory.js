class ConsultaFactory {
  static criarConsulta(tipo) {
    switch (tipo) {
      case "Cardiologia":
        return { tipo: "Consulta Cardiológica" };
      case "Pediatria":
        return { tipo: "Consulta Pediátrica" };
      default:
        return { tipo: "Consulta Ortopédica" };
    }
  }
}
module.exports = ConsultaFactory;