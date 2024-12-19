import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'myProjectFiles',
    access: (allow) => ({
        '*':[
            allow.guest.to(['read']),
            allow.authenticated.to(['read','write','delete'])
        ],
    })
  });