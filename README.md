
 
 #Projeto Lista de Tarefas
Este projeto foi desenvolvido como parte das atividades do curso FullStack da EBAC. O objetivo principal é criar uma aplicação simples para gerenciar tarefas, permitindo o cadastro, organização e conclusão de forma prática e interativa.

Objetivo
Criar uma lista de tarefas interativa para a instituição de ensino EBAC.

Instruções da Tarefa
Criar um formulário com:
Um campo para adicionar o nome da tarefa;
Um botão para envio da tarefa.
Ao submeter o formulário, gerar um elemento <li> dentro de uma lista (ordenada ou não).
Adicionar funcionalidade interativa:
Ao clicar em um item da lista, aplicar um efeito de riscado no texto (usando text-decoration: line-through) para indicar que a tarefa foi concluída.
Utilizar jQuery para manipulação de elementos e controle de eventos.
Criar uma branch no GitHub chamada exercicio_jquery, enviar o exercício para o repositório e compartilhar o link na plataforma da EBAC.
Ferramentas Utilizadas
HTML, para estruturação da página;
CSS, para estilização da interface;
jQuery, para manipulação e interatividade.
Funcionalidades Adicionais do Projeto
Estrutura Inicial

Cabeçalho: Contém o título em destaque.
Rodapé: Inclui os direitos do autor e links para contato (GitHub, LinkedIn, etc.).
Corpo Principal: Apresenta o formulário para adicionar tarefas e a lista de tarefas criadas.
Formulário de Cadastro de Tarefas

Campo em branco para inserir o nome da tarefa.
Botão "Prioridade" interativo:
Ao passar o mouse, surgem três opções (botões do tipo radio) para selecionar o nível de prioridade: Alta, Média ou Baixa.
O botão muda de cor de acordo com a prioridade escolhida:
Vermelho para Alta;
Laranja para Média;
Amarelo para Baixa.
Botão de envio:
Caso o campo "nome da tarefa" ou a prioridade não sejam preenchidos, uma mensagem de erro é exibida, informando o que está faltando e impedindo o envio da tarefa.
Criação Dinâmica da Lista de Tarefas

Ao enviar uma tarefa, o programa armazena o nome e a prioridade e cria um elemento <li> dinamicamente utilizando jQuery.
Cada item da lista contém:
Nome da tarefa: Exibido em uma tag <p>;
Prioridade: Exibida com a cor correspondente ao nível escolhido;
Status: Inicialmente definido como "Ativa" e exibido em uma tag <p> interativa;
Botão de exclusão: Representado por um ícone de lixeira.
Interatividade da Lista

Status:
Ao clicar na palavra "Ativa", o status muda para "Concluída".
O texto do nome da tarefa é riscado (efeito line-through).
A cor do nível de prioridade muda para cinza, indicando prioridade "0" (tarefa concluída).
Exclusão:
Ao clicar no ícone da lixeira, o item da lista é removido, mesmo que ainda não tenha sido concluído.


## Publicação

O projeto está publicado na Vercel e pode ser acessado pelo link abaixo:  
[Link para a aplicação na Vercel]((https://ebac-exercicio-jquery-three.vercel.app//))
(https://ebac-exercicio-jquery-three.vercel.app//)




👤 Desenvolvedor
Wanderson Brito Santos
📧 Email: wbsmsn@hotmail.com
🌐 GitHub: github.com/WandersonBritoSantos
🔗 LinkedIn: linkedin.com/in/wanderson-brito-santos-6284a01ab

