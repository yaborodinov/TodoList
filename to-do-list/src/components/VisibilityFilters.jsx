import React from "react";
import { connect } from "react-redux";
import { setFilters } from "../redux/actions";


const VisibilityFilters = ({activeFilter, setFilters }) => {
    return (
        <div>
            {}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        
    }
}
export default connect(mapStateToProps, { setFilters })(VisibilityFilters);