export function updateStatus({ request, response, database }) {
  const { id } = request.params;
  const { solution } = request.body;

  if (!solution) {
    return response.writeHead(400).end("Solution is required");
  }

  database.update("tickets", id, {
    status: "closed",
    solution,
    updated_at: new Date(),
  });
  response.end();
}
