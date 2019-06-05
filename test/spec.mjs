import { is } from '@magic/test'
import * as Accordion from '../src/index.mjs'

export default [
  {
    fn: () => Accordion.View,
    expect: is.function,
    info: 'expect Accordion.View to be a function',
  },
  {
    fn: () => Accordion.propTypes.Accordion,
    expect: is.array,
    info: 'expect Accordion.propTypes.Accordion to be an array',
  },
]
