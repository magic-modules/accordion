export const View = state => [
  h1(state.title),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' Pre component. ',
    state.description,
  ]),

  GitBadges('magic-modules/accordion'),

  h2({ id: 'installation' }, 'installation:'),
  Pre('npm install magic-modules/accordion'),

  h2({ id: 'usage' }, 'usage:'),
  p('in a page/component.'),
  Pre(`
export const View = state => Accordion({
  key: 'about',
  items: [
    { title: 'title', text: 'content' },
    { title: 'title 2', text: 'content 2' },
    {
      title: 'title 3',
      text: [
        p('content'),
        p('can also be an'),
        p(['array', ' of', ' modules']),
        Link({ to: 'https://magic.github.io' }, 'magic.github.io'),
      ],
    },
  ],
  title: 'optional title',
  state,
})
`),

  h2({ id: 'demo' }, 'demo'),
  p('the example above renders'),
  Accordion({
    key: 'about',
    items: [
      { title: 'title', text: 'content' },
      { title: 'title 2', text: 'content 2' },
      {
        title: 'title 3',
        text: [
          p('content'),
          p('can also be an'),
          p(['array', ' of', ' modules']),
          Link({ to: 'https://magic.github.io' }, 'magic.github.io'),
        ],
      },
    ],
    title: 'optional title',
    state,
  }),

  h2({ id: 'css' }, 'css'),
  p([
    'by default, css is minimal. to adapt the styles for your theme,',
    ' add (and change) the following object to /assets/theme/{THEME_NAME}/index.mjs',
  ]),
  Pre(`
'.Accordion': {
  h3: {}, // main title
  '.AccordionItem': {
    h4: {}, // item title

    '.content': {}, // item content

    '&.open': {
      '.content': {}, // item content if opened
    },
  },
}`),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/accordion/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]
