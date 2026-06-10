class GerenciadorConsultas {
  constructor() {
    if (!GerenciadorConsultas.instancia) {
      this.consultas = [];
      GerenciadorConsultas.instancia = this;
    }
    return GerenciadorConsultas.instancia;
  }

  adicionar(consulta) {
    this.consultas.push(consulta);
  }

  listarTodas() {
    return this.consultas;
  }
}

const instancia = new GerenciadorConsultas();
Object.freeze(instancia);
module.exports = instancia;