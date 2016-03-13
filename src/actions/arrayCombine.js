export const combineArrays = (left, right) => {
    return {
        type: "COMBINE_ARRAYS",
        data: {
            left: left,
            right: right
        }
    }
}