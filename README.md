
# API de Suporte Técnico

Uma API para gerenciamento de tickets de suporte técnico, permitindo criar, listar, atualizar, e excluir tickets. Esta API facilita o acompanhamento e resolução de problemas técnicos de forma organizada.
## Rotas

#### Criar Ticket

```http
  POST /tickets
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `equipment` | `string` | **Required**. Nome do equipamento (exemplo: computador) |
| `description` | `string` | **Required**. Descrição do problema. |
| `user_name ` | `string` | **Required**. Nome do usuário que está criando o ticket. |

#### Obter Tickets

```http
  GET /tickets
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `status`      | `string` | **Opcional**. Filtra os tickets pelo status ("open" ou "closed"). |

#### Atualizar Tickets

```http
  PUT /tickets/:id
```

| Tipo        | Parameter        | Type     | Description                                    |
|-------------|-------------|----------|----------------------------------------------|
| Rota        | `id`        | `UUID`   | **Required**. ID do ticket.              |
| Corpo (JSON)| `equipment` | `string` | **Required**. Nome do equipamento (ex.: computador). |
| Corpo (JSON)| `description` | `string` | **Required**. Descrição do problema.     |



#### Fechar Ticket

```http
  PATCH /tickets/:id/status
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `UUID` | **Required**.  ID do ticket. |

#### Excluir Ticket

```http
  DELETE tickets/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `UUID` | **Required**. ID do ticket. |
