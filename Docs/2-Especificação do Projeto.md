# Especificações do Projeto

## Personas

PERSONA 1: Maria tem 34 anos, é uma dona de supermercado e está querendo adaptar um novo modelo de negócio. Ela observa que muitos clientes tem tido a necessecidade de receber suas compras em casa. Ela até começa a fazer vendas via whatsapp, só que logo ela vê que esse método não é muito organizado, além de varias limitações para apresentar os produtos disponíveis ao cliente. Ela busca por uma aplicação onde ela possa de maneira, organizada e sistematizada, possa vender os seus produtos de forma online, e entrar de vez nessa tedência de mercado.

PERSONA 2: Gisele tem 47 anos, trabalha como administradora do seu próprio negócio e é muito atarefada. Fazer as compras no mercado para a sua residência é uma atividade que fica em segundo plano e na maioria das vezes acaba deixando algum produto para trás, pois passa de forma rápida no supermercado. Um projeto que disponibilize a lista dos produtos oferecidos em um determinado mercado e entregue em suas mãos de forma cômoda, seria a sua solução.


PERSONA 3: Izabela tem 20 anos, cuida/mora somente com sua avó, ajuda nas tarefas de casa e faz faculdade de Medicina Veterinária. Como o seu tempo é corrido, fica dificil ir ao supermercado fazer suas compras e de sua avó, porém quando ela vai gasta muito tempo, já que o estabelecimento é um pouco longe de sua casa, sempre gasta dinheiro com aplicativo de carro e passa bastante tempo nas filas. Com isso, Izabela está a procura de um aplicativo que disponibilize a compra de seus produtos de forma prática e rápida, sem tirar o conforto de estar em casa e ter que sair para fazer compras. Desse modo, seu tempo será otimizado e ela consiguirá estudar, cuidar de sua avó e dos serviços de casa de uma forma mais tranquila.


PERSONA 4: Roberto tem 28 anos, é empresário e mora com seus pais. Nesse período da pandemia, ele está trabalhando somente online, uma vez que seus pais fazem parte do grupo de risco, não podem sair e ter contato com muitas pessoas. Dessa forma, para sua familia não passar por isso e não ter o risco de pegar Covid, eles desejam um aplicatico de compras essenciais que entrega os  produtos em casa.

PERSONA 5: Sara, tem 35 anos é professora e dona de casa, está sempre correndo entre dar aulas online e fazer as tarefas do dia a dia, ela tem 2 filhos de 2 e 4 anos, é solteira, com a pandemia seus filhos não vão para a escola fazendo a sua semana ainda mais corrida, ela sempre teve dificuldade para ir ao mercado fazer suas compras com 2 crianças pequenas, e com o risco de contaminação no momento tudo tem ficado mais difícil, já que Leandra é hipertensa sendo considerada grupo de risco da covid 19.

PERSONA 6: Leandro, de 32 anos, é um arquiteto que desempenha suas atividades por consultorias online. Ele mora sozinho e é um cadeirante devido a sua deficiência nas pernas e devido a isso possui dificuldades pra transitar de carro até o supermercado e se locomover dentro do estabelecimento. Ele busca alternativas para que possa fazer suas compras sem sair de casa e assim ter mais tempo pra desempenhar suas funções de trabalho.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |  PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|  ----------------------------------------|
|1- Dona de Supermercado  | 1- Gostaria de ter uma plataforma onde possa por à mostra os seus produtos, para serem pedidos de forma online. |1- Entrar na tendência digital de mercado e ter opção de venda em tempos de crise.|
|2- Empresária | 2- Criar a sua lista de produtos do supermercado sem ir ao estabelecimento | 2- Organizar com menos tempo a lista de compras e ganhar mais tempo para as atividades do trabalho|
|3- Estudante de Medicina Veterinária  | 3- Quer não gastar tempo de locomoção até o supermercado mais próximo.  |3- Otimizar o tempo e conseguir estudar, cuidar de sua avó e dos serviços de casa de uma forma mais tranquila|
|4- Empresário    | 4- Agendar a entrega de produtos em sua casa para evitar o risco de contaminação.   |4- Não sair de casa e evitar o contato com muitas pessoas, já que os meus pais são grupo de risco|
|5- Professora e Dona de casa | 5- Ter uma alternativa pra fazer compras, além das formas tradicionais. |5-  Facilitar as compras, otimizar o tempo, e evitar aglomerações, pelo fato de ser hipertensa e do grupo de risco  |
|6- Arquiteto e portador de deficiência  | 6- Uma aplicação que entregue suas compras em casa, para evitar os desafios que ele, como cadeirante, tem ao fazer compras presenciais.  |6- Evitar o estresse da locomoção ao supermercado e ganhar tempo para fazer suas consultorias online. |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastramento do usuário (dados pessoais)| ALTA | 
|RF-002| Localização do usuário                  | ALTA |
|RF-003| Atendimento ao cliente online (Chat - WhatsApp)  | MÉDIA |
|RF-004| Listamento dos produtos das prateleiras do supermercado  | ALTA |
|RF-005| Recursos de pagamento online            | BAIXO |
|RF-006| Recursos de interação com o público (sugestões ou reclamações)   | MÉDIO |
|RF-007| Recursos para mostrar as promoções periódicas  | ALTA |
|RF-008| Possibilitar formas do cliente avaliar a plataforma   | BAIXA |
|RF-009| Elaborar relatório de produtos vendidos  | MÉDIA |
|RF-010| Realizar o calculo no caso de taxas extras de entrega | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Fazer recomendações aos clientes de acordo com seu histórico de compra. |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Área de abrangência do atendimento delivery.          |
|02| Necessidade de controle dos dados dos usuários.       |
