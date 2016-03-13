import React, { Component } from "react";
import { connect } from 'react-redux'
import ArrayForm from '../components/arrayForm'

class Layout extends Component {



    render() {

        let that = this;

        const outerLayout = {
            paddingTop: "30px",
            height:"100vh",
            backgroundColor:"#4caf50"
        };

        const card = {
            margin: "0 auto"
        }

        const squareBrackets = {
            fontSize: "2.28rem"
        }

        const arrayInteger = {
            fontSize: "1.78rem"
        }

        return (
            <div className="text-center" style={outerLayout}>
                <div className="container card-panel" style={card}>
                    <ArrayForm />
                    <div className="section">
                        <div class="divider"></div>

                        <h3> combined array: </h3>
                        <span style={squareBrackets}>[ &nbsp;</span>
                        {this.props.combinedArray.map( (el, id) => {
                            let text = (id !== that.props.combinedArray.length-1) ? el+", " : el
                            return (<span style={arrayInteger} key={id}>{text}</span>)
                        })}
                        <span style={squareBrackets}> &nbsp;]</span>
                    </div>
                </div>
            </div>
        )
    }

}

Layout.contextTypes = {
    store: React.PropTypes.object
}


const mapStateToProps = (state) => {
    return {
        combinedArray: state.combinedArray
    }
}

Layout = connect(
    mapStateToProps
)(Layout)

export default Layout
