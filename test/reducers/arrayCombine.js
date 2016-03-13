import expect from 'expect'
import * as actions from '../../src/actions/arrayCombine'
import reducer from '../../src/reducers/arrayCombine'
import * as constants from '../constants'

//only 1 action in app, so no need to import
const COMBINE_ARRAYS = "COMBINE_ARRAYS"

describe('arrayCombine reducer', () => {
    it('should return initial state', () => {
        expect (
            reducer(undefined, {})
        ).toEqual({
            combinedArray: []
        })
    })

    it('should equal empty array if inputs are empty arrays', () => {
        expect(
            reducer([], {
                type: COMBINE_ARRAYS,
                data: {
                    left: [],
                    right: []
                }
            })
        ).toEqual({
            combinedArray: []
        })
    })

    it('should return sorted array if input arrays have length 1', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: "1",
                    right: "2"
                }
            })
        ).toEqual({
            combinedArray: [1,2]
        })
    })

    it('should return sorted array if left array length 0', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: [],
                    right: "2"
                }
            })
        ).toEqual({
            combinedArray: [2]
        })
    })

    it('should return sorted array if right array length 0', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: "1",
                    right: []
                }
            })
        ).toEqual({
            combinedArray: [1]
        })
    })

    it('should return sorted array if left array length 0 and right array large', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: [],
                    right: "1,2,3,4,5,6,7,8,9,12,13,14,15"
                }
            })
        ).toEqual({
            combinedArray: [1,2,3,4,5,6,7,8,9,12,13,14,15]
        })
    })

    it('should return sorted array if right array length 0 and left array large', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: "1,2,3,4,5,6,7,8,9,12,13,14,15",
                    right: []
                }
            })
        ).toEqual({
            combinedArray: [1,2,3,4,5,6,7,8,9,12,13,14,15]
        })
    })

    it('should return sorted array if right array and left array large AND duplicate', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: "1,2,3,4,5,6,7,8,9,12,13,14,15",
                    right: "1,2,3,4,5,6,7,8,9,12,13,14,15"
                }
            })
        ).toEqual({
            combinedArray: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,12,12,13,13,14,14,15,15]
        })
    })

    it('should return sorted array if right array and left array large AND right array larger than left', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: "1,2,3,4,5,6,7,8,9,12,13,14,15",
                    right: "16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40"
                }
            })
        ).toEqual({
            combinedArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        })
    })

    it('should return sorted array if right array and left array large AND left array larger than right', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: "1,2,3,4,5,6,7,8,9,12,13,14,15",
                    right: "16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40"
                }
            })
        ).toEqual({
            combinedArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        })
    })

    it('should return sorted array if right array and left array 1000 values', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: constants.array1000,
                    right: constants.array1000
                }
            })
        ).toEqual({
            combinedArray: constants.array1000combined
        })
    })

    it('should return sorted array if right array and left array 10000 values', () => {
        expect(
            reducer({}, {
                type: COMBINE_ARRAYS,
                data: {
                    left: constants.array10000,
                    right: constants.array10000
                }
            })
        ).toEqual({
            combinedArray: constants.array10000combined
        })
    })

})