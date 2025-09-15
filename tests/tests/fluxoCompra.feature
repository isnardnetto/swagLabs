# language: pt

Funcionalidade: Fluxo de compra no site SauceDemo
  Como um usuário do site
  Quero realizar o fluxo de compra completo
  Para garantir que o processo de compra funcione corretamente

  Cenário: Fluxo básico de compra
    Dado que estou na página de login
    Quando faço login com usuário "standard_user" e senha "secret_sauce"
    E adiciono os produtos "sauce-labs-onesie", "sauce-labs-bolt-t-shirt" e "sauce-labs-backpack" ao carrinho
    Então o carrinho deve conter 3 itens
    Quando acesso o carrinho
    E inicio o checkout
    E preencho o formulário com nome "isnard", sobrenome "santos" e CEP "599000"
    E finalizo a compra
    Então devo ver a mensagem "Thank you for your order!"

  Cenário: Validação do fluxo de compra
    Dado que estou na página de login
    Quando faço login com usuário "standard_user" e senha "secret_sauce"
    Então devo ver a tela "Products"
    Quando adiciono o produto "sauce-labs-onesie" ao carrinho
    E acesso o carrinho
    Então devo ver o texto "Your Cart"
    Quando inicio o checkout
    Então devo ver o texto "Your Information"
    Quando preencho o formulário com nome "teste", sobrenome "teste02" e CEP "599000"
    Então devo ver o cabeçalho "Checkout: Overview"
    E devo ver a informação de entrega "Free Pony Express Delivery!"
    E devo ver a informação de pagamento "total: $7.99"
    Quando finalizo a compra
    Então devo ver a mensagem "Thank you for your order!"
