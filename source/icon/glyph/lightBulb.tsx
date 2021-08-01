
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const LightBulbGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-34,-60)' className={cx('svg-filling', 'fill')}>
            <g transform='translate(34,60)'>
                <path d='M10.3684966,16.3234371 C10.341055,15.5053197 10.8038369,14.3122355 11.3288944,13.8773296 C12.4049344,12.7162511 13.4616133,10.9330085 13.9138761,9.60137378 C14.3479354,8.32325352 14.4568302,7.05504369 14.2375151,5.83197399 C14.0364069,4.71035265 13.5698452,3.68353316 12.8508175,2.78002188 C12.1362175,1.88208123 11.2100102,1.1542274 10.0979227,0.616702346 C9.60658265,0.381362346 9.0636435,0.179468676 8.42911387,0.0796896111 C7.70139958,-0.0347305566 6.9142558,-0.0180697931 6.19107855,0.0796896111 C4.38140718,0.324350088 2.8128746,1.22382484 1.65505414,2.6809051 C0.959148741,3.57355183 0.472703066,4.49474765 0.206622203,5.42215996 C-0.0430628753,6.29246581 -0.00972702689,7.17381836 0.0210757711,8.09214226 C0.117767817,10.9748225 2.85684052,13.3555944 3.12190427,14.0125954 C3.37765414,14.6465072 3.57264269,15.2458558 3.67773651,16.8105265 C3.72781458,17.556105 4.16386831,17.9241641 4.98589769,17.9147038 C4.98082539,17.9095945 8.52236745,17.6933079 9.39841044,17.517896 C10.0694091,17.4452866 10.3927711,17.0471337 10.3684966,16.3234371 Z' />
                <path d='M5.45603758,25.070997 C5.13692999,24.8668841 4.90345054,24.4914394 4.78084665,23.9852554 C4.69469723,23.6296041 4.69121094,23.3247375 4.69110715,23.3119285 C4.69011603,23.192998 4.74447316,23.0800457 4.8361541,23.0105347 C4.92784297,22.9410237 5.04486047,22.9240402 5.1483996,22.9652092 C5.15349078,22.9672338 5.66714005,23.1705933 6.23697013,23.3376462 C6.56692093,23.4343726 6.81575778,23.490043 7.00202266,23.5207809 C6.78155116,23.4370176 6.51714475,23.3527889 6.23920081,23.2642419 C5.72233513,23.0996023 5.18785728,22.9293388 4.76353386,22.7122166 C4.51198616,22.5835011 4.32418183,22.4505367 4.18937251,22.3057151 C3.95125612,22.0499242 3.91607246,21.7911071 3.92847541,21.6190335 C3.92866992,21.6163827 3.92888834,21.6137233 3.92913843,21.6110719 C3.94170928,21.4759667 4.01019509,21.3548728 4.11702793,21.2788135 C4.39636686,21.079988 4.82407916,21.2003227 6.07451498,21.624357 C6.52524135,21.77721 6.991306,21.9352616 7.387348,22.0370093 C7.47488054,22.0594977 7.55233142,22.0774181 7.62084253,22.0916493 C7.57934542,22.0729567 7.53383371,22.053289 7.48402898,22.0327001 C7.14437568,21.8922326 6.72328349,21.7545507 6.27748381,21.6088091 C5.73722209,21.4321736 5.17857413,21.2495406 4.7539849,21.0539752 C4.33951604,20.8630709 3.86650708,20.5837508 3.88798414,20.1142211 C3.89580346,19.9431989 3.97152644,19.7951243 4.10119665,19.6972888 C4.31347814,19.5371206 4.63508802,19.529173 5.21126053,19.6697813 C5.62296256,19.7702724 6.12624453,19.9380221 6.61295314,20.1002555 C7.05589082,20.2479043 7.51390684,20.4005593 7.8875135,20.4971089 C8.06620986,20.5432773 8.20018935,20.5696844 8.29990353,20.5842306 C8.23708883,20.5491392 8.15375567,20.5084979 8.04346375,20.4632679 C7.7494864,20.342704 7.3628243,20.2276624 6.95344949,20.1058638 C6.12673068,19.8598913 5.18970875,19.5811084 4.56753043,19.1266212 C4.19234063,18.8525468 3.64704169,18.4679038 3.83057262,18.1677496 C4.01410354,17.8675953 4.40261002,18.1304279 4.95321516,18.5326349 C5.48630719,18.9220436 6.3678689,19.1843313 7.14564839,19.4157584 C8.15486036,19.7160161 8.88404113,19.9329704 9.09451078,20.4124701 C9.17074101,20.5861115 9.17151892,20.776073 9.09677467,20.9617693 C9.03636824,21.1118168 8.890349,21.2947552 8.53772118,21.3142537 C8.38043228,21.3228371 8.1804398,21.299846 7.92637648,21.2436975 C7.49075959,21.147371 6.93691924,20.9627673 6.40132927,20.7842474 C5.96040081,20.6372815 5.50445762,20.4853001 5.13293476,20.3891353 C5.04724873,20.3669494 4.97186665,20.3493292 4.90568636,20.3353953 C4.97600464,20.3710844 5.05998712,20.4103689 5.16026308,20.453093 C5.5361715,20.6132522 6.0188699,20.7710639 6.48569004,20.9236912 C7.03131573,21.1020767 7.54668823,21.2705696 7.93860669,21.452109 C8.17003369,21.5593022 8.34000001,21.6635207 8.45823129,21.7707286 C8.73008854,22.0172397 8.71701634,22.2743054 8.68502796,22.4056146 C8.64875116,22.5544834 8.55725228,22.6792906 8.42740384,22.7570344 C8.0001521,23.0128145 7.17337443,22.7527761 5.85979007,22.307313 C5.54009932,22.1989046 5.23673563,22.0960321 4.97870393,22.0201215 C5.00518294,22.0348769 5.03323913,22.0498782 5.06296814,22.0650907 C5.44092534,22.2584882 5.9502981,22.4207557 6.44289733,22.5776704 C6.84616888,22.7061398 7.22708097,22.8274749 7.51309875,22.9598825 C7.68969125,23.0416348 7.81603213,23.1204264 7.91067107,23.2078645 C8.12744385,23.4081134 8.13278047,23.6258869 8.1166734,23.7378721 C8.09190902,23.9100545 7.998269,24.0558362 7.85303133,24.1483738 C7.75485019,24.2109348 7.61384691,24.2676022 7.35990371,24.270384 C7.08879562,24.2733351 6.68894175,24.2148555 6.07460004,24.0364774 C5.84471748,23.9697351 5.62501051,23.8978483 5.43921526,23.8336921 C5.50451505,24.080654 5.35296462,24.1991861 5.80987175,24.4551743 C6.26677888,24.7111625 6.32282419,25.1554589 6.11121771,25.2536688 C5.88210401,25.3648448 5.65059974,25.1954328 5.45603758,25.070997 Z' id='Fill-185' transform='translate(6.473066, 21.663996) scale(-1, 1) rotate(-16.000000) translate(-6.473066, -21.663996)' />
            </g>
        </g>
    </g>, { viewBox: '0 0 15 26' })
