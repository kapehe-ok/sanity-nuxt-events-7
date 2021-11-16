export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-7-studio',
                  apiId: 'a4100986-6468-44bf-823d-b862e325d358'
                },
                {
                  buildHookId: '6193f9ab2870c05acfa67c21',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-7',
                  apiId: '3a85c6c5-90f2-4b14-9871-4e039bedb41c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-nuxt-events-7',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
