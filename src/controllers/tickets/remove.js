export function remove({ request, response, database }) {
  const { id } = request.params;

  const tickets = database.select("tickets");

  const findId = tickets.find((ticket) => ticket.id === id);

  if (!findId) {
    return response.writeHead(400).end("Id is missing");
  }

  database.delete("tickets", id);

  return response.end("Ticket removido com sucesso!");
}
