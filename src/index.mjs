export const View = (props = {}) => {
  const { key, title, class: cl, items, state } = props

  const { accordions = {} } = state

  CHECK_PROPS(props, propTypes, 'Accordion')

  if (!key || !items || !items.length) {
    return
  }

  const classString = cl ? ` ${cl}` : ''

  const wrapperProps = {
    class: `Accordion ${key}${classString}`,
  }

  return div(wrapperProps, [
    title && h3(title),
    ul(
      items.map(({ title, text }, id) => {
        const open = accordions[key]

        const itemProps = {
          class: `AccordionItem${open === id ? ' open' : ''}`,
        }

        const headerProps = {
          onclick: [actions.accordion.toggle, { key, id }],
        }

        return div(itemProps, [
          title && h4(headerProps, title),
          text && div({ class: 'content' }, text),
        ])
      }),
    ),
  ])
}

export const actions = {
  accordion: {
    toggle: (state, { key, id }) => {
      if (state.accordions[key] !== id) {
        state.accordions[key] = id
      } else {
        state.accordions[key] = -1
      }

      return {
        ...state,
        accordions: state.accordions,
      }
    },
  },
}

export const style = (vars = {}) => {
  const { transitionDuration: dur = 300 } = vars
  const transition = `font-size ${dur}ms, margin ${dur}ms`

  return {
    position: 'relative',

    '.AccordionItem': {
      h4: {
        cursor: 'pointer',
        display: 'block',
        lineHeight: 1,
        margin: 0,
        padding: 0,
      },

      '.content': {
        fontSize: 0,
        margin: 0,
        padding: 0,
        transition,
      },

      '&.open': {
        '.content': {
          fontSize: 'inherit',
          margin: '0 0 1em',
          transition,
        },
      },
    },
  }
}

export const state = {
  accordions: {},
}

export const propTypes = {
  Accordion: [
    { key: 'items', type: 'array', required: true },
    { key: 'key', type: 'string', required: true },
    { key: 'title', type: 'string' },
    { key: 'style', type: 'object' },
  ],
}

export const global = {
  state: {
    accordions: true,
  },
  actions: {
    accordion: true,
  },
}
