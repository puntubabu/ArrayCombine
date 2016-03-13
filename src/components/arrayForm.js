import React, { Component } from "react";
import { connect } from 'react-redux'
import { combineArrays } from '../actions/arrayCombine'


class ArrayForm extends Component {

    constructor(props) {
        super(props)
        this.isValidArray = this.isValidArray.bind(this)
    }

    render() {
        const { store } = this.context;

        return (
            <div>
                <form onSubmit={ e => {
                    e.preventDefault()
                    let left = e.target[0].value === "" ? [] : e.target[0].value
                    let right = e.target[1].value === "" ? [] : e.target[1].value
                    if (this.isValidArray([left,right])) {
                        store.dispatch(combineArrays(left, right))
                    } else {
                        console.log("ERROR")
                    }
                }}>
                    <h3>
                        Please input <b>sorted</b> integer arrays
                    </h3>
                    <div className="form-group">
                        <input className="form-control" placeholder="ex: 0,3,45,546" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="ex: 0,3,45,546" />
                    </div>
                    <button class="btn waves-effect waves-green green lighten-2" type="submit" name="action">
                        Combine Arrays
                    </button>

                </form>
            </div>
        );
    }

    /*
        Verify that input is two integer arrays
     */
    isValidArray(arrays) {
        arrays.forEach( (el) => {
            el.split ? el.split(',').map(x =>
                {
                    if (parseInt(x, 10) === NaN) {
                        return false
                    }
                }
            ) : null
        } )
        return true
    }
}


ArrayForm.contextTypes = {
    store: React.PropTypes.object
}

ArrayForm = connect()(ArrayForm)

export default ArrayForm