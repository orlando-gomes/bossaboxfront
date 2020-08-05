Opcionalmente, pode-se testar o App hospedado em servidor no endereço
https://modest-hodgkin-38008e.netlify.app/

Para rodar localmente:
- Baixar do Github
- Executar comandos no terminal, dentro do diretório da aplicacão
  - $ yarn (para instalar as dependências)
  - $ yarn start

A aplicação vai se comunicar com a API real em https://orlstechbacks.com/bossaboxback

Devido à CORS Policy, o navegador vai negar o recebimento da resposta da API, pois o header 'access-control-allow-origin' está apontado para a url da aplicação hospedada em servidor.
Uma opção é iniciar o Chrome desabilitando esta regra de segurança rodando no terminal o comando abaixo antes de dar o yarn start:

$ open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/Chrome dev session" --disable-web-security
