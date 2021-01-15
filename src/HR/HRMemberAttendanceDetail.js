import React from 'react';

function HRMemberAttendanceDetail(props) {
     return (
        <div>
            <h3>{props.timein||"______________________"} {props.idx} {props.timeout||"______________________"}</h3>
            <hr/>
        </div>
        )
}
export default HRMemberAttendanceDetail;

