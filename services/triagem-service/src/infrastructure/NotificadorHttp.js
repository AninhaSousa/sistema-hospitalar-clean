class NotificadorHttp {
  async enviarNotificacao(mensagem) {
    try {
      // O service de notificação rodará na porta 3002
      await fetch("http://localhost:3002/notificar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensagem })
      });
    } catch (error) {
      console.log("Aviso: Microsserviço de Notificação está offline, mas a triagem foi salva.");
    }
  }
}
module.exports = NotificadorHttp;