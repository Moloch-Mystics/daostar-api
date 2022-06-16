import { Api, StackContext } from '@serverless-stack/resources'

export function MyStack({ stack }: StackContext) {
    // Create the HTTP API
    const api = new Api(stack, 'Api', {
        routes: {
            'GET /members/{id}': 'functions/getMembers.handler',
        },
        // customDomain: {
        //     domainName: "sandbox.logos.xyz",
        //     hostedZone: "sandbox.logos.xyz",
        //     path: "api/v1",
        // },
    })

    // Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    })
}
