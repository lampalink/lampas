
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import { GlyphProps } from './glyph'

import { ACDiscussionGlyph } from './glyph/acDiscussion'
import { ACDramaGlyph } from './glyph/acDrama'
import { ACHumorGlyph } from './glyph/acHumor'
import { ACDrillGlyph } from './glyph/acDrill'
import { ACPresentationGlyph } from './glyph/acPresentation'
import { ACWarmupGlyph } from './glyph/acWarmup'
import { ACStoryGlyph } from './glyph/acStory'
import { ACQuizzGlyph } from './glyph/acQuizz'
import { ACMediaGlyph } from './glyph/acMedia'
import { ACPuzzleGlyph } from './glyph/acPuzzle'
import { BookGlyph } from './glyph/book'
import { BoldGlyph } from './glyph/bold'
import { DiceGlyph } from './glyph/dice'
import { ItalicGlyph } from './glyph/italic'
import { UnderlineGlyph } from './glyph/underline'
import { BulletListGlyph } from './glyph/bulletList'
import { CalendarGlyph } from './glyph/calendar'
import { CalendarSimpleGlyph } from './glyph/calendarSimple'
import { CaretDownGlyph } from './glyph/caretDown'
import { CaretLeftGlyph } from './glyph/caretLeft'
import { CaretRightGlyph } from './glyph/caretRight'
import { CaretUpGlyph } from './glyph/caretUp'
import { ChevronDownGlyph } from './glyph/chevronDown'
import { ChevronLeftGlyph } from './glyph/chevronLeft'
import { ChevronRightGlyph } from './glyph/chevronRight'
import { ChevronUpGlyph } from './glyph/chevronUp'
import { CarSeatGlyph } from './glyph/carSeat'
import { CheckCircleGlyph } from './glyph/checkCircle'
import { CheckFilledGlyph } from './glyph/checkFilled'
import { CheckRingGlyph } from './glyph/checkRing'
import { CheckmarkGlyph } from './glyph/checkmark'
import { CheckboxFilledGlyph } from './glyph/checkboxFilled'
import { CheckboxGlyph } from './glyph/checkbox'
import { PersonGlyph } from './glyph/person'
import { LessonPlanGlyph } from './glyph/lessonPlan'
import { AddUserGlyph } from './glyph/addUser'
import { AtGlyph } from './glyph/at'
import { SubscriptionGlyph } from './glyph/subscription'
import { CloseCircleGlyph } from './glyph/closeCircle'
import { CloseGlyph } from './glyph/close'
import { CopyGlyph } from './glyph/copy'
import { CommentGlyph } from './glyph/comment'
import { CloseInvertedGlyph } from './glyph/closeInverted'
import { DashboardGlyph } from './glyph/dashboard'
import { DottedCubeGlyph } from './glyph/dottedCube'
import { DotsHorizontalGlyph } from './glyph/dotsHorizontal'
import { DotsVerticalGlyph } from './glyph/dotsVertical'
import { DocumentsGlyph } from './glyph/documents'
import { EyeGlyph } from './glyph/eye'
import { EmptyStateGlyph } from './glyph/emptyState'
import { FeatherGlyph } from './glyph/feather'
import { FolderGlyph } from './glyph/folder'
import { FilterGlyph } from './glyph/filter'
import { FourHorizontalLinesGlyph } from './glyph/fourHorizontalLines'
import { GearGlyph } from './glyph/gear'
import { HeadphonesGlyph } from './glyph/headphones'
import { HomeGlyph } from './glyph/home'
import { ImageGlyph } from './glyph/image'
import { IluBulbGlyph } from './glyph/iluBulb'
import { IluOwlGlyph } from './glyph/iluOwl'
import { IluPlannerGlyph } from './glyph/iluPlanner'
import { IluScheduleGlyph } from './glyph/iluSchedule'
import { LampaLogoGlyph } from './glyph/lampaLogo'
import { LightBulbGlyph } from './glyph/lightBulb'
import { LinkGlyph } from './glyph/link'
import { ListNumberedGlyph } from './glyph/listNumbered'
import { LoaderGlyph } from './glyph/loader'
import { LibraryGlyph } from './glyph/library'
import { LampGlyph } from './glyph/lamp'
import { LocationGlyph } from './glyph/location'
import { LoveFillGlyph } from './glyph/loveFill'
import { MinusCircleGlyph } from './glyph/minusCircle'
import { MinusGlyph } from './glyph/minus'
import { NotificationBellGlyph } from './glyph/notificationBell'
import { NotificationBellActiveGlyph } from './glyph/notificationBellActive'
import { PencilGlyph } from './glyph/pencil'
import { PencilSimpleGlyph } from './glyph/pencilSimple'
import { PeopleTalkingGlyph } from './glyph/peopleTalking'
import { PersonWithHairGlyph } from './glyph/personWithHair'
import { PlayInvertedGlyph } from './glyph/playInverted'
import { PaperClipGlyph } from './glyph/paperClip'
import { PlusCircleGlyph } from './glyph/plusCircle'
import { PlusGlyph } from './glyph/plus'
import { PlusInvertedGlyph } from './glyph/plusInverted'
import { GraduateHatGlyph } from './glyph/graduateHat'
import { PrinterGlyph } from './glyph/printer'
import { QuestionMarkGlyph } from './glyph/questionMark'
import { ReminderGlyph } from './glyph/reminder'
import { RadioCheckedGlyph } from './glyph/radioChecked'
import { RadioUncheckedGlyph } from './glyph/radioUnchecked'
import { ReloadInvertedGlyph } from './glyph/reloadInverted'
import { ReadingGlyph } from './glyph/reading'
import { RescheduleGlyph } from './glyph/reschedule'
import { SearchCircleGlyph } from './glyph/searchCircle'
import { OpenGlyph } from './glyph/open'
import { SearchGlyph } from './glyph/search'
import { SettingsGlyph } from './glyph/settings'
import { SignoutGlyph } from './glyph/signout'
import { StarGlyph } from './glyph/star'
import { StopGlyph } from './glyph/stop'
import { StarOutlineGlyph } from './glyph/starOutline'
import { SpeachBubleGlyph } from './glyph/speachBuble'
import { SendGlyph } from './glyph/send'
import { SplitVerticalGlyph } from './glyph/splitVertical'
import { SquareFeatherGlyph } from './glyph/squareFeather'
import { StudentGlyph } from './glyph/student'
import { ScheduleGlyph } from './glyph/schedule'
import { ScheduleVerticalGlyph } from './glyph/scheduleVertical'
import { ScheduleHorizontalGlyph } from './glyph/scheduleHorizontal'
import { SchoolGlyph } from './glyph/school'
import { SortASCGlyph } from './glyph/sortAsc'
import { ShareGlyph } from './glyph/share'
import { NineSquaresGlyph } from './glyph/nineSquares'
import { TrashGlyph } from './glyph/trash'
import { LoveGlyph } from './glyph/love'
import { LockGlyph } from './glyph/lock'
import { TrashInvertedGlyph } from './glyph/trashInverted'
import { TeachingSettingsGlyph } from './glyph/teachingSettings'
import { TwoHorizontalLinesGlyph } from './glyph/twoHorizontalLines'
import { GoogleLogoGlyph } from './glyph/googleLogo'
import { FacebookLogoGlyph } from './glyph/facebookLogo'
import { LinkedInLogoGlyph } from './glyph/linkedInLogo'
import { UnlockGlyph } from './glyph/unlock'
import { WarningGlyph } from './glyph/warning'
import { WomanGlyph } from './glyph/woman'

export type GlyphName =
    'ac-discussion'|
    'ac-drama'|
    'ac-humor'|
    'ac-warmup'|
    'ac-story'|
    'ac-drill'|
    'ac-quizz'|
    'ac-presentation'|
    'ac-media'|
    'ac-puzzle'|
    'book'|
    'bold'|
    'dice'|
    'italic'|
    'underline'|
    'bullet-list'|
    'calendar-simple'|
    'calendar'|
    'car-seat'|
    'caret-down'|
    'caret-left'|
    'caret-right'|
    'caret-up'|
    'chevron-down'|
    'chevron-left'|
    'chevron-right'|
    'chevron-up'|
    'check-circle'|
    'check-filled'|
    'check-ring'|
    'checkbox'|
    'comment'|
    'checkmark'|
    'checkbox-filled'|
    'close-circle'|
    'person'|
    'lesson-plan'|
    'add-user'|
    'at'|
    'subscription'|
    'close-inverted'|
    'copy'|
    'close'|
    'dashboard'|
    'dotted-cube'|
    'dots-horizontal'|
    'dots-vertical'|
    'documents'|
    'eye'|
    'empty-state'|
    'feather'|
    'folder'|
    'filter'|
    'four-horizontal-lines'|
    'gear'|
    'headphones'|
    'home'|
    'image'|
    'ilu-bulb'|
    'ilu-owl'|
    'graduate-hat'|
    'ilu-planner'|
    'ilu-schedule'|
    'lampa-logo'|
    'light-bulb'|
    'link'|
    'open'|
    'lamp'|
    'loader'|
    'love-fill'|
    'list-numbered'|
    'location'|
    'library'|
    'love'|
    'lock'|
    'minus-circle'|
    'minus'|
    'notification-bell'|
    'notification-bell-active'|
    'pencil'|
    'pencil-simple'|
    'people-talking'|
    'person-with-hair'|
    'play-inverted'|
    'plus-circle'|
    'plus-inverted'|
    'paper-clip'|
    'plus'|
    'printer'|
    'question-mark'|
    'reminder'|
    'radio-checked'|
    'radio-unchecked'|
    'reload-inverted'|
    'reading'|
    'reschedule'|
    'search-circle'|
    'search'|
    'send'|
    'settings'|
    'star'|
    'square-feather'|
    'star-outline'|
    'stop'|
    'school'|
    'schedule-vertical'|
    'schedule-horizontal'|
    'signout'|
    'sort-asc'|
    'speach-buble'|
    'student'|
    'share'|
    'split-vertical'|
    'schedule'|
    'nine-squares'|
    'teaching-settings'|
    'trash-inverted'|
    'trash'|
    'two-horizontal-lines'|
    'google-logo'|
    'facebook-logo'|
    'linkedin-logo'|
    'unlock'|
    'warning'|
    'woman'

const glyphs: {
    [name in GlyphName]: any
} = {
    'ac-discussion': ACDiscussionGlyph,
    'ac-presentation': ACPresentationGlyph,
    'ac-drama': ACDramaGlyph,
    'ac-humor': ACHumorGlyph,
    'ac-warmup': ACWarmupGlyph,
    'ac-quizz': ACQuizzGlyph,
    'ac-drill': ACDrillGlyph,
    'ac-media': ACMediaGlyph,
    'ac-story': ACStoryGlyph,
    'ac-puzzle': ACPuzzleGlyph,
    'book': BookGlyph,
    'bold': BoldGlyph,
    'dice': DiceGlyph,
    'italic': ItalicGlyph,
    'underline': UnderlineGlyph,
    'bullet-list': BulletListGlyph,
    'calendar-simple': CalendarSimpleGlyph,
    'calendar': CalendarGlyph,
    'car-seat': CarSeatGlyph,
    'caret-down': CaretDownGlyph,
    'caret-left': CaretLeftGlyph,
    'caret-right': CaretRightGlyph,
    'caret-up': CaretUpGlyph,
    'chevron-down': ChevronDownGlyph,
    'chevron-left': ChevronLeftGlyph,
    'chevron-right': ChevronRightGlyph,
    'chevron-up': ChevronUpGlyph,
    'check-circle': CheckCircleGlyph,
    'check-filled': CheckFilledGlyph,
    'check-ring': CheckRingGlyph,
    'checkbox': CheckboxGlyph,
    'checkmark': CheckmarkGlyph,
    'comment': CommentGlyph,
    'checkbox-filled': CheckboxFilledGlyph,
    'close-circle': CloseCircleGlyph,
    'close-inverted': CloseInvertedGlyph,
    'close': CloseGlyph,
    'copy': CopyGlyph,
    'person': PersonGlyph,
    'add-user': AddUserGlyph,
    'at': AtGlyph,
    'subscription': SubscriptionGlyph,
    'love-fill': LoveFillGlyph,
    'dashboard': DashboardGlyph,
    'documents': DocumentsGlyph,
    'dotted-cube': DottedCubeGlyph,
    'dots-horizontal': DotsHorizontalGlyph,
    'dots-vertical': DotsVerticalGlyph,
    'filter': FilterGlyph,
    'eye': EyeGlyph,
    'empty-state': EmptyStateGlyph,
    'open': OpenGlyph,
    'graduate-hat': GraduateHatGlyph,
    'feather': FeatherGlyph,
    'folder': FolderGlyph,
    'four-horizontal-lines': FourHorizontalLinesGlyph,
    'gear': GearGlyph,
    'headphones': HeadphonesGlyph,
    'home': HomeGlyph,
    'image': ImageGlyph,
    'ilu-bulb': IluBulbGlyph,
    'ilu-owl': IluOwlGlyph,
    'ilu-planner': IluPlannerGlyph,
    'ilu-schedule': IluScheduleGlyph,
    'lampa-logo': LampaLogoGlyph,
    'lamp': LampGlyph,
    'light-bulb': LightBulbGlyph,
    'loader': LoaderGlyph,
    'link': LinkGlyph,
    'library': LibraryGlyph,
    'list-numbered': ListNumberedGlyph,
    'location': LocationGlyph,
    'love': LoveGlyph,
    'lock': LockGlyph,
    'minus-circle': MinusCircleGlyph,
    'minus': MinusGlyph,
    'notification-bell': NotificationBellGlyph,
    'notification-bell-active': NotificationBellActiveGlyph,
    'pencil': PencilGlyph,
    'pencil-simple': PencilSimpleGlyph,
    'paper-clip': PaperClipGlyph,
    'people-talking': PeopleTalkingGlyph,
    'person-with-hair': PersonWithHairGlyph,
    'play-inverted': PlayInvertedGlyph,
    'plus-circle': PlusCircleGlyph,
    'plus-inverted': PlusInvertedGlyph,
    'plus': PlusGlyph,
    'printer': PrinterGlyph,
    'question-mark': QuestionMarkGlyph,
    'reminder': ReminderGlyph,
    'radio-checked': RadioCheckedGlyph,
    'radio-unchecked': RadioUncheckedGlyph,
    'reload-inverted': ReloadInvertedGlyph,
    'reschedule': RescheduleGlyph,
    'reading': ReadingGlyph,
    'lesson-plan': LessonPlanGlyph,
    'search-circle': SearchCircleGlyph,
    'search': SearchGlyph,
    'settings': SettingsGlyph,
    'signout': SignoutGlyph,
    'speach-buble': SpeachBubleGlyph,
    'sort-asc': SortASCGlyph,
    'student': StudentGlyph,
    'share': ShareGlyph,
    'star': StarGlyph,
    'send': SendGlyph,
    'split-vertical': SplitVerticalGlyph,
    'square-feather': SquareFeatherGlyph,
    'star-outline': StarOutlineGlyph,
    'stop': StopGlyph,
    'schedule': ScheduleGlyph,
    'schedule-vertical': ScheduleVerticalGlyph,
    'schedule-horizontal': ScheduleHorizontalGlyph,
    'school': SchoolGlyph,
    'nine-squares': NineSquaresGlyph,
    'teaching-settings': TeachingSettingsGlyph,
    'trash-inverted': TrashInvertedGlyph,
    'trash': TrashGlyph,
    'two-horizontal-lines': TwoHorizontalLinesGlyph,
    'google-logo': GoogleLogoGlyph,
    'facebook-logo': FacebookLogoGlyph,
    'linkedin-logo': LinkedInLogoGlyph,
    'unlock': UnlockGlyph,
    'warning': WarningGlyph,
    'woman': WomanGlyph,
}

export interface IconBaseProps {
    glyph: React.ComponentType<GlyphProps>
    size?: number|string
    className?: string
    container?: React.HTMLAttributes<HTMLDivElement>
    color?: 'black'|'white'|'grey'|'blue'|'blue-whitish'|'purple'|'red'|'green'|'yellow'|'transparent'
    isRotating?: boolean
    isDraggable?: boolean
    onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): any
    onMouseDown?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): any
    onMouseUp?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): any
    onDragStart?: React.DragEventHandler<HTMLDivElement>
    onDragEnd?: React.DragEventHandler<HTMLDivElement>
    onDrag?: React.DragEventHandler<HTMLDivElement>
}

export const IconBase = ({ glyph: Glyph, size, className, container, color, isRotating, isDraggable, onClick, onDragStart, onDragEnd, onDrag, onMouseDown, onMouseUp }: IconBaseProps) => {
    if (!Glyph) {
        return null
    }

    const _size = size || '16px'

    const {
        style,
        className: containerClassName,
        onClick: _overriddenOnClick,
        ...rest
    } = container || {}

    const containerStyle = _.merge({}, {
        width: _size,
        height: _size,
    }, style)

    return (
        <div
            style={containerStyle}
            className={cx('icon-container', className, containerClassName, color, {
                isRotating, isDraggable,
                hoverable: typeof onClick === 'function',
            })}
            draggable={isDraggable}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onClick}
            {...rest}
        >
            <Glyph
                width={containerStyle.width}
                height={containerStyle.height}
            />
        </div>
    )
}

export interface IconProps extends Omit<IconBaseProps, 'glyph'> {
    type: GlyphName
}

export const Icon = ({ type, ...rest }: IconProps) => {
    return (
        <IconBase
            glyph={glyphs[type]}
            {...rest}
        />
    )
}
