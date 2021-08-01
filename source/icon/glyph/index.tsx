
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

export interface GlyphProps extends React.SVGAttributes<SVGElement> {
    width: any // number|string
    height: any // number|string
}

export const Glyph = ({ width, height, ...rest }: GlyphProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className={cx('icon-glyph')}
            version='1.1'
            preserveAspectRatio='xMaxYMid meet'
            style={{ width, height }}
            // style={{ width: size, height: size }}
            {...rest}
        />
    )
}

export const withGlyph = (renderGlyph: () => JSX.Element, svgAttributes: React.SVGAttributes<SVGElement> = {}) => {
    return ({ color, ...rest }: GlyphProps) =>
        <Glyph {...rest} {...svgAttributes}>{renderGlyph()}</Glyph>
}
