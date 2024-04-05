# Pagination App
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE) 

# Sobre o projeto

É uma aplicação simples (Full Stack). O projeto foi construído com intuíto de aprender sobre pagination com Spring Boot e como integrar isso como o Angular. 

A aplicação consiste em uma listar usuários e possibilitar a busca por nome do usuário.

Também aplicado 'caching'que basicamente é o armazenamento e a reutilização de recursos de um site acessados com frequência. Implementado com Spring Cache e Redis no em execução no Docker.

![Docker - Redis](https://github.com/erolkss/spring-pagination-angular/blob/main/pagination-angular/src/main/resources/images/Docker%20-%20Redis.png?raw=true)
## Layout web
### Home Page
![Web 1](https://github.com/erolkss/spring-pagination-angular/blob/main/pagination-angular/src/main/resources/images/Home%20-%20User%20List%20-%20Pagination%20App.png?raw=true)

### Search User Name
![Web 2](https://github.com/erolkss/spring-pagination-angular/blob/main/pagination-angular/src/main/resources/images/Search%20By%20Name%20-%20Pagination%20App.png?raw=true)


# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- Spring Cache
- JPA / Hibernate
- Maven
- Lombook
- Data Redis (Cache)

## Front end
- HTML 5 / CSS / JS
- Bootstrap v5.3
- Angular 17

## Data Base
- MySQL


# Como executar o projeto

## Data

Pré-requisitos: Banco de Dados MySQL

Nessa aplicação foi usado o MySQL, mas você pode usar qualquer outro Banco Dados SQL.
Você terá que configurar somente o Drive no Spring e a credencial para acessar o seu Banco de dados.

```
# Criar o Banco de dados
CREATE DATABASE pagination;

# Alterar a configuração de conexão no arquivo 'application.yml' para o seu Banco de Dados:
url: jdbc:mysql://localhost:3306/pagination
username: root
password: root@pass


# Executar os sql files da pasta data em pagination-angular:
Path - src/main/resources/data/

1º user.sql
2º data-user.sql


```



## Back end
Pré-requisitos: Java 20

```bash
# clonar repositório
git clone https://github.com/erolkss/spring-pagination-angular.git

# entrar na pasta do projeto back end
cd pagination-angular

# executar o projeto
./mvnw spring-boot:run

# executar docker - image 'Redis'
~ docker run --name my-redis -p 6379:6379 -d redis


```

## Front end web
Pré-requisitos: Angular 17

```bash
# clonar repositório
git clone https://github.com/erolkss/spring-pagination-angular.git

# entrar na pasta do projeto front end web
cd paginationapp

# instalar dependências
npm install

# executar o projeto
ng serve | npm start
```

# Autor

Lucas Eduardo Lima
https://www.linkedin.com/in/lucaserolima/



