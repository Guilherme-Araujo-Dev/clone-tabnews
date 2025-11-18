import database from "/infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as SOMA;");
  console.log(result.rows);
  response.status(200).json({ message: "sucess" });
}

export default status;
