# language: pt

Funcionalidade: Fluxo de compra no site SauceDemo
  Como um usuário do site
  Quero realizar o fluxo de compra completo
  Para garantir que o processo de compra funcione corretamente

  Cenário: Fluxo básico de compra
    Dado que estou na página de login
    Quando faço login com usuário "standard_user" e senha "secret_sauce"
    E adiciono os produtos "sauce-labs-onesie", "sauce-labs-bolt-t-shirt" e "sauce-labs-backpack" ao carrinho
    Então o carrinho deve conter "3" itens
    Quando acesso o carrinho
    E inicio o checkout
    E preencho o formulário com nome "isnard", sobrenome "santos" e CEP "599000"
    E finalizo a compra
    Então devo ver a mensagem "Thank you for your order!"

  
