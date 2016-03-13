const sortedArray = (a, b) => {

    var smallerArray = [];
    var largerArray = [];

    if (a.length >= b.length) {
        smallerArray = b.length === 0 ? [] : b;
        largerArray = a.length === 0 ? [] : a;
    } else {
        largerArray = b.length === 0 ? [] : b;
        smallerArray = a.length === 0 ? [] : a;
    }


    /*
        Use Binary Insert Approach

        n = larger array size
        m = smaller array size

        Function will take: m (foreach) + n (splice worst case) + log(n) (binary search)

    */
    smallerArray.forEach( (el) => {

        if (el === 0) {

            largerArray.splice(0, 0, el);

        } else {

            var start = 0;
            var end = largerArray.length;
            while(true) {

                var mid = Math.floor((end + start) / 2);

                if (el === largerArray[mid]) {
                    largerArray.splice(mid, 0, el);
                    break;
                }
                else if (el < largerArray[mid]) {
                    end = mid - 1;
                    if (start > end) {
                        largerArray.splice(mid, 0, el);
                        break;
                    }
                } else {
                    start = mid + 1;
                    if (start > end) {
                        largerArray.splice(mid+1, 0, el);
                        break;
                    }
                }
            }

        }

    })
    return largerArray;
}

const arrayCombine = (state = { combinedArray: [] }, action) => {
    switch (action.type) {
        case "COMBINE_ARRAYS":
            return {
                combinedArray: sortedArray(
                    action.data.left.split ? action.data.left.split(',').map(Number) : [],
                    action.data.right.split ? action.data.right.split(',').map(Number) : []
                )
            }
        default:
            return state
    }
}

export default arrayCombine