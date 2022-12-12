### - Instalando as dependencias:

Faca o clone na sua maquina e rode o comando `yarn`

### - Inicializando:

Configure o seu .env , rode o comando `yarn typeorm migration:run -d src/data-source.ts` e depois o para inicializar a aplicacao `yarn dev`.

### - Dados esperados:

### - localhost:8000/users -- Rota de criação de cliente:

{
	"username":"Mariazinha",
	"password":"123456",
	"full_name": "Maria da Silva",
	"contacts": [{
	"email": "maria@hotmail.com",
	"telephone" :"99911-9911"
	}]
}

Resposta Esperada -- 201 Created

{
	"id": "31410c7f-5ffa-4ae6-84ef-269f74110867",
	"username": "Mariazinha",
	"full_name": "Maria da Silva",
	"createdAt": "2022-12-12T03:24:40.330Z",
	"client": [],
	"contacts": [
	{
	"email": "maria@hotmail.com",
	"telephone": "99911-9911"
	}
	]
}

Error - Username Already exists -- 400 Bad Request:

{
	"message": "Username Already Exists"
}


### - http://localhost:8000/login -- Rota para login

Rota utilizada para fazer o login e pegar o token:

Exemplo de envio:

{
	"username": "Mariazinha",
	"password": "123456"
}

Resposta Esperada: 200 - Ok 

{
	"token": string
}

### - Rota Protegidas, é necessário que seja passado o token:
### - localhost:8000/users -- Rota para buscar o usuario:

Deve ser passado o token para buscar o usuário logado, retorno esperado: 200 - OK

{
	"id": "31410c7f-5ffa-4ae6-84ef-269f74110867",
	"username": "Mariazinha",
	"full_name": "Maria da Silva",
	"createdAt": "2022-12-12T03:24:40.330Z",
	"client": [],
	"contacts": [
	{
	"email": "maria@hotmail.com",
	"telephone": "99911-9911"
	}
	]
}

### - localhost:8000/clients/:id_client -- Rota para criação de contato 


localhost:8000/contacts/31410c7f-5ffa-4ae6-84ef-269f74110867

{
	"full_name": "Gustavo da Silva",
	"contacts": [{
	"email": "gustavo@hotmail.com",
	"telephone" :"99119-9911"
	}]
}


Resposta Esperada: 201 - Created 

{
	"id": "5c892d70-94e2-4586-b7f7-2af0f480a237",
	"full_name": "Gustavo da Silva",
	"contact": [
		{
			"email": "gustavo@hotmail.com",
			"telephone": "99119-9911"
		}
	]
} 

# Delete :

### - localhost:8000/users/:id_client -- Rota para deletar o usuario 

Exemplo de rota:

http://localhost:8000/users/de7e7694-f3b4-486b-aa58-8c1bd155446f

Resposta esperada: 204 - No content

### - localhost:8000/clients/:id_client -- Rota para deletar um contato 

Exemplo de rota:

http://localhost:8000/clients/

Resposta esperada: 204 - No content


# Update :

### - localhost:8000/users/:id_client -- Rota para patch de usuario 

Exemplo de body:
{
	"full_name" : "Maria Costa"
}

Resposta esperada: 200 - ok
### - localhost:8000/clients/:id_client -- Rota para patch de client 
Exemplo de body:
{
	"full_name" : "Maria Costa"
}

Resposta esperada: 200 - ok
