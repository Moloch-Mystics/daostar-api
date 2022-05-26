import {notes} from "../notes";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const eventId = event?.pathParameters?.id
  if (!eventId) return {statusCode: 400}
  const note = notes[eventId];
  return note
    ? {
        statusCode: 200,
        body: JSON.stringify(note),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
  };