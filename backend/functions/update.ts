import {notes} from "../notes";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const eventId = event?.pathParameters?.id
  const eventBody = event?.body
  if (!eventId || !eventBody) return {statusCode: 400}
  const note = notes[eventId];

  if (!note) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: true }),
    };
  }

  const data = JSON.parse(eventBody);

  note.content = data.content;

  return {
    statusCode: 200,
    body: JSON.stringify(note),
  };
};