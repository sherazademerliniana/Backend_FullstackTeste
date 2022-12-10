### - Instalando as dependencias: 

Faca o clone na sua maquina e rode o comando `yarn` 

### - Inicializando:

Configure o seu .env , rode o comando `yarn typeorm migration:run -d src/data-source.ts` e depois o para inicializar a aplicacao `yarn dev`.


### - Dados esperados:

### - localhost:8000/clients -- Para criacao de cliente:

{
	"full_name": string
	"links": [{
	"email": string,
	"telephone" : string
    }]
}

links sao um array de objetos contendo email e telephone dentro de cada objeto.

### - localhost:8000/contacts/:id_client -- para criacao de contato

Eh esperado que seja passado no site o id do client para que ele seja criado 

{
	"full_name": string
	"links": [{
	"email": string,
	"telephone" : string
    }]
}

o body utilizado eh o mesmo


# Get:

Utilizando os mesmos sites pode puxar os dados tanto de clientes como de contatos.

# Delete :

localhost:8000/contacts/:id

localhost:8000/clients/:id

Utilizando esses sites voce pode deletar cliente ou o contato passando o id deles nos parametros.

# Update :

localhost:8000/contacts/:id

localhost:8000/clients/:id

utiliza o mesmo mas so pode trocar o full_name.
