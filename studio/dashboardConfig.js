export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ddb2cd2687d60ec23f19570',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fov1atf7',
                  apiId: '97a9b199-35cd-44e0-8b3e-93103c5bb91c'
                },
                {
                  buildHookId: '5ddb2cd216886774428b5b96',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xxxkbppc',
                  apiId: '0b12e3b4-0ef9-4ae4-ab88-8087d0314281'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/khongwuts/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xxxkbppc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
