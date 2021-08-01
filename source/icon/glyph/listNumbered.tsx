
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const ListNumberedGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-166,-393)' className={cx('svg-filling', 'fill')}>
            <g transform='translate(166,393)'>
                <path d='M3.18303333,1.83333333 L10.4847417,1.83333333 C10.7372833,1.83333333 10.943075,1.62845833 10.943075,1.375 C10.943075,1.12154167 10.7372833,0.916666667 10.4847417,0.916666667 L3.18303333,0.916666667 C2.929575,0.916666667 2.7247,1.12154167 2.7247,1.375 C2.7247,1.62845833 2.929575,1.83333333 3.18303333,1.83333333' />
                <path d='M10.4846042,4.58310417 L3.18289583,4.58310417 C2.92989583,4.58310417 2.7245625,4.78797917 2.7245625,5.0414375 C2.7245625,5.29489583 2.92989583,5.49977083 3.18289583,5.49977083 L10.4846042,5.49977083 C10.7376042,5.49977083 10.9429375,5.29489583 10.9429375,5.0414375 C10.9429375,4.78797917 10.7376042,4.58310417 10.4846042,4.58310417' />
                <path d='M10.4846042,8.25 L3.18289583,8.25 C2.92989583,8.25 2.7245625,8.454875 2.7245625,8.70833333 C2.7245625,8.96179167 2.92989583,9.16666667 3.18289583,9.16666667 L10.4846042,9.16666667 C10.7376042,9.16666667 10.9429375,8.96179167 10.9429375,8.70833333 C10.9429375,8.454875 10.7376042,8.25 10.4846042,8.25' />
                <path d='M0.640704167,1.32197083 L0.974370833,1.06897083 L0.974370833,2.1767625 C0.974370833,2.3665125 1.12837083,2.5205125 1.31812083,2.5205125 C1.50787083,2.5205125 1.66187083,2.3665125 1.66187083,2.1767625 L1.66187083,0.3768875 C1.66187083,0.2462625 1.58807917,0.127095833 1.47074583,0.0693458333 C1.35387083,0.0111375 1.21407917,0.0244291667 1.11049583,0.1032625 L0.225454167,0.7742625 C0.0742041667,0.888845833 0.0444125,1.1042625 0.158995833,1.2555125 C0.273579167,1.40630417 0.489454167,1.43609583 0.640704167,1.32197083' />
                <path d='M1.3497,5.5 L1.1297,5.5 C1.1737,5.45233333 1.21403333,5.41016667 1.2507,5.37120833 C1.48949167,5.1205 1.661825,4.93945833 1.661825,4.48570833 C1.661825,4.04754167 1.30203333,3.69141667 0.859741667,3.69141667 C0.418825,3.69141667 0.0732416667,4.038375 0.0732416667,4.481125 C0.0732416667,4.670875 0.227241667,4.824875 0.416991667,4.824875 C0.606741667,4.824875 0.760741667,4.670875 0.760741667,4.481125 C0.760741667,4.41604167 0.79695,4.37891667 0.859741667,4.37891667 C0.924825,4.37891667 0.974325,4.42475 0.974325,4.48570833 C0.974325,4.66491667 0.965616667,4.673625 0.75295,4.89683333 C0.603991667,5.053125 0.399575,5.26808333 0.124575,5.63933333 C0.047575,5.74383333 0.0356583333,5.88270833 0.094325,5.99866667 C0.152533333,6.114625 0.2717,6.1875 0.401408333,6.1875 L1.3497,6.1875 C1.53945,6.1875 1.69345,6.0335 1.69345,5.84375 C1.69345,5.654 1.53945,5.5 1.3497,5.5' />
                <path d='M1.605725,7.86463333 C1.674475,7.75921667 1.679975,7.62446667 1.61993333,7.51309167 C1.55989167,7.40263333 1.44393333,7.333425 1.31789167,7.333425 L0.43285,7.333425 C0.2431,7.333425 0.0891,7.487425 0.0891,7.677175 C0.0891,7.866925 0.2431,8.020925 0.43285,8.020925 L0.683558333,8.020925 L0.571266667,8.19371667 C0.502516667,8.29913333 0.497016667,8.43434167 0.557516667,8.5448 C0.617558333,8.656175 0.733516667,8.724925 0.859558333,8.724925 C0.929225,8.724925 0.961308333,8.73684167 0.961308333,8.733175 C0.961308333,8.733175 0.974141667,8.75700833 0.974141667,8.83125833 C0.974141667,8.89359167 0.964975,8.92063333 0.96635,8.922925 C0.955808333,8.92750833 0.922808333,8.93759167 0.859558333,8.93759167 L0.43285,8.93759167 C0.2431,8.93759167 0.0891,9.09159167 0.0891,9.28134167 C0.0891,9.47109167 0.2431,9.62509167 0.43285,9.62509167 L0.859558333,9.62509167 C1.36189167,9.62509167 1.66164167,9.32809167 1.66164167,8.83125833 C1.66164167,8.54938333 1.56493333,8.33213333 1.38985,8.19646667 L1.605725,7.86463333 Z' />
            </g>
        </g>
    </g>, { viewBox: '0 0 11 10' })
