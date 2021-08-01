
import * as React from 'react'

export interface StepProps {
    key: string
    title: string
    // icon?: GlyphNa
    children: React.ReactNode
}

export const Step = ({ children }: StepProps) =>
    <React.Fragment>{children}</React.Fragment>
