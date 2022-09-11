import React from "react"
import { Button } from '../Button'

const Template = <Button size="small" label="button" />


describe('button', () => {
    test('small button', () => {
        expect(Template.props.size).toBe('small')
    })
})