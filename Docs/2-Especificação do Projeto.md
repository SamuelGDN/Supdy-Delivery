# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

PERSONA 1: Maria tem 21 anos, é uma estudante universitária e ajuda os seus pais nas tarefas do dia a dia. Ir ao supermercado fazer compras não é uma tarefa que ela gosta, acha que gasta muito tempo escolhendo os produtos presentes no mercado e esperando nas filas para passar as mercadorias. Por isso, está a procura de alguma plataforma tecnológica que otimize o seu tempo neste tipo de tarefa, de modo que consiga escolher os produtos que queira comprar, pagar de forma online e pedir a sua entrega em casa.


PERSONA 2: Gisele tem 47 anos, trabalha como administradora do seu próprio negócio e é muito atarefada. Fazer as compras no mercado para a sua residência é uma atividade que fica em segundo plano e na maioria das vezes acaba deixando algum produto para trás, pois passa de forma rápida no supermercado. Um projeto que disponibilize a lista dos produtos oferecidos em um determinado mercado e entregue em suas mãos de forma cômoda, seria a sua solução.


PERSONA 3: Izabela tem 20 anos, cuida/mora somente com sua avó, ajuda nas tarefas de casa e faz faculdade de Medicina Veterinária. Como o seu tempo é corrido, fica dificil ir ao supermercado fazer suas compras e de sua avó, porém quando ela vai gasta muito tempo, já que o estabelecimento é um pouco longe de sua casa, sempre gasta dinheiro com aplicativo de carro e passa bastante tempo nas filas. Com isso, Izabela está a procura de um aplicativo que disponibilize a compra de seus produtos de forma prática e rápida, sem tirar o conforto de estar em casa e ter que sair para fazer compras. Desse modo, seu tempo será otimizado e ela consiguirá estudar, cuidas de sua avó e dos serviços de casa de uma forma mais tranquila.


PERSONA 4: Roberto tem 28 anos, é empresário e mora com seus pais. Nesse período da pandemia, ele está trabalhando somente online, uma vez que seus pais fazem parte do grupo de risco, não podem sair e ter contato com muitas pessoas. Dessa forma, para sua familia não passar por isso e não ter o risco de pegar Covid, eles desejam um aplicatico de compras essenciais que entrega os  produtos em casa.

PERSONA 5:

PERSONA 6: Leandro, de 32 anos, é um arquiteto que desempenha suas atividades por consultorias online. Ele mora sozinho e é um cadeirante devido a sua deficiência nas pernas e devido a isso possui dificuldades pra transitar de carro até o supermercado e se locomover dentro do estabelecimento. Ele busca alternativas para que possa fazer suas compras sem sair de casa e assim ter mais tempo pra desempenhar suas funções de trabalho.


Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |  PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|  ----------------------------------------|
|1- Estudante universitária  | 1-Facilitar as minhas compras cotidianas no supermercado |1- Otimizar o tempo nos mercados|
|2- Empresária | 2- Facilitar a maneira de realizar as compras de supermercado | 2- Organizar com mais tempo a lista de compras e ganhar mais tempo para as atividades do trabalho|
|3- Estudante de Medicina Veterinária  | 3-Disponibilidade de um aplicativo para fazer as compras essenciais  |3- Otimizar o tempo e conseguir estudar, cuidar de sua avó e dos serviços de casa de uma forma mais tranquila|
|4- Empresário    | 4- Um aplicatio de compras essenciais que entrega os produtos em casa                                                    |4- Não sair de casa e evitar o contato com muitas pessoas, já que os meus pais são grupo de risco|
|5-                          | 5-                                                       |5-                              |
|6-                          | 6-                                                       |6-                              |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastramento do usuário (dados pessoais)| ALTA | 
|RF-002| Localização do usuário                  | ALTA |
|RF-003| Atendimento ao cliente online           | MÉDIA |
|RF-004| Listamento e descrição dos produtos das prateleiras do supermercado  | ALTA |
|RF-005| Recursos de pagamento online            | MÉDIA |
|RF-006| Recursos de interação com o público (sugestões ou reclamações)   | BAIXA |
|RF-007| Recursos de rastreamento do motoboy     | BAIXA |
|RF-008| Possibilitar formas do cliente avaliar a plataforma   | BAIXA |
|RF-009|                                                       | MÉDIA |
|RF-010|                                                       | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Área de abrangência do atendimento delivery           |
|02|                                                       |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
