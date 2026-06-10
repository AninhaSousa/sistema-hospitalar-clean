Funcionalidade: Triagem de Pacientes Hospitalares
  Como um enfermeiro da recepção
  Eu quero realizar a triagem dos sintomas do paciente
  Para que o sistema defina a prioridade correta do atendimento

  Cenário: Paciente com sintomas graves deve receber pulseira de Emergência
    Dado que o paciente se chama "Ana Mendes"
    E apresenta o sintoma "Dor forte no peito"
    Quando a triagem for registrada com a prioridade "Emergência"
    Então o sistema deve retornar a pulseira "Emergência"