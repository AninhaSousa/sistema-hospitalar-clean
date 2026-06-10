class NotificadorHttp {
  async enviarNotificacao(mensagem) {
    try {
      // A notificação rodará na porta 3002
      await fetch("https://notificacao-service-ana.onrender.com/notificar", {
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