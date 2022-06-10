import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const eventId = event?.pathParameters?.id
    if (!eventId) return { statusCode: 400 }

    const template = {
        '@context': {
            '@vocab': 'http://daostar.org/',
        },
        type: 'DAO',
        name: eventId,
        members: [],
    }

    return template
        ? {
              statusCode: 200,
              body: JSON.stringify(template),
          }
        : {
              statusCode: 404,
              body: JSON.stringify({ error: true }),
          }
}
