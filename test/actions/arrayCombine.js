import expect from 'expect'
import * as actions from '../../src/actions/arrayCombine'

describe('actions', () => {
    it('should create arrayCombine action, which returns combined sorted array', () => {
        const expectedAction = {
            type: "COMBINE_ARRAYS",
            data: {
                left: [],
                right: []
            }
        }
        expect(actions.combineArrays([], [])).toEqual(expectedAction)

    })
})