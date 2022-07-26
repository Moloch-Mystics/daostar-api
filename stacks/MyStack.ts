import { Api, StackContext } from '@serverless-stack/resources'

export function MyStack({ stack }: StackContext) {
    // Create the HTTP API
    const api = new Api(stack, 'Api', {
        routes: {
            'GET /molochv2/members/{network}/{id}': 'functions/molochv2/getMembers.handler',
            'GET /molochv2/proposals/{network}/{id}': 'functions/molochv2/getProposals.handler',
            'GET /molochv2/activities/{network}/{id}': 'functions/molochv2/getActivityLogs.handler',
            'GET /molochv3/members/{network}/{id}': 'functions/molochv3/getMembers.handler',
            'GET /molochv3/proposals/{network}/{id}': 'functions/molochv3/getProposals.handler',
            'GET /molochv3/activities/{network}/{id}': 'functions/molochv3/getActivityLogs.handler',
        },
        // customDomain: {
        //     domainName: 'sandbox.logos.xyz',
        //     hostedZone: 'sandbox.logos.xyz',
        //     path: 'api/v1',
        // },
    })

    // Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    })
}
