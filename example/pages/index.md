# ${title}

this is the [@magic-modules](https://github.com/magic-modules) Accordion component.

${state.description}

<GitBadges>@magic-modules/accordion</GitBadges>

<h2 id="installation">installation</h2>

<Pre>npm install @magic-modules/accordion</Pre>

<h2 id="usage">usage</h2>

in a page or Component.

<Pre>
&lt;Accordion
  state
  key="about"
  items="[
    { title: 'title text: 'content' },
    { title: 'title 2 text: 'content 2' },
    {
      title: 'title 3
      text: [
        p('content'),
        p('can also be an'),
        p(['array ' of ' modules']),
        Link({ to: 'https://magic.github.io' }, 'magic.github.io'),
      ],
    },
  ]"
  title="optional title">
&lt;/Accordion>
</Pre>

<h2 id="demo">demo</h2>

the example above renders

<Accordion
  key="about"
  items="[{ title: 'title', text: 'content' }, { title: 'title 2', text: 'content 2' }]"
  title="optional title"
  state>
</Accordion>

<h2 id='css'>css</h2>

by default, css is minimal. to adapt the styles for your theme,
add (and change) the following object to /assets/theme/{THEME_NAME}/index.mjs

<Pre>
'.Accordion': {
  h3: {}, // main title
  '.AccordionItem': {
    h4: {}, // item title

    '.content': {}, // item content

    '&.open': {
      '.content': {}, // item content if opened
    },
  },
}
</Pre>

<h2 id='source'>source</h2>

the source for this page is in the
[example directory](https://github.com/magic-modules/accordion/tree/master/example),
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
