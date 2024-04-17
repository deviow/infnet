//input
anoNascimento = 2002
nome = "Danilo"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade + " anos"

//output
alert(mensagem)
