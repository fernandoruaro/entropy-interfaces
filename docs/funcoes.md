# Funções
- COL
- ANO
- MÊS
- DIA
- SE
- E
- OU
- CONCATENAR


### CONT.NÚM

Conta a quantidade de registros.

**Exemplo:**

``` swift
CONT.NÚM('Propriedade')
```

### CONT.SE

Conta quantos registros satisfazem a condição.

**Exemplos:**

``` swift
//Conta quantos registros possuem seu `Status` "Finalizado"
CONT.SE('Status'; "Finalizado")
```

``` swift
//Conta quantos registros possuem `Valor` maior que 100
CONT.SE('Valor'; ">100")
```


### SOMA

Realiza o somatório dos valores contidos na propriedade informada.

**Exemplo:**

``` swift
SOMA('Valor')
```


### SOMASE

Realiza o somatório dos valores dos registros que satisfizerem a condição.

**Exemplos:**

``` swift
//Soma a propriedade `Valor` quando a propriedade `Texto` tiver seu conteúdo igual a `Exemplo`.
SOMASE('Texto'; "Exemplo"; 'Valor')
```

``` swift
//Soma a propriedade `Valor` quando a propriedade `Valor` for maior que zero.
SOMASE('Valor'; ">0"; 'Valor')
```


### MAIOR

Retorna o maior valor para a propriedade contida nos registros.

**Exemplo:**

``` swift
MAIOR('Valor')
```


### MENOR

Retorna o menor valor para a propriedade contida nos registros.

**Exemplo:**

``` swift
MENOR('Valor')
```


### MÉDIA

Retorna o média dos valores para a propriedade.

**Exemplo:**

``` swift
MÉDIA('Valor')
```


### PROCV

Procura um valor em outro formulário.

**Exemplos:**

``` swift
//Procura na tabela `Moedas` o registro que possui o `Código` igual a "USD", e retorna o valor contido na tabela `Cotação`
PROCV("USD"; 'Moedas'.'Código'; 'Moedas'.'Cotação')
```

``` swift
//Procura na tabela `Moedas` o registro que possui o `Código` igual ao valor da propriedade `Moeda`, e retorna o valor contido na tabela `Cotação`
PROCV('Moeda'; 'Moedas'.'Código'; 'Moedas'.'Cotação')
```

