import React from 'react';

const Confirm = ({yesAction, noAction, subject}) => {
    return(
        <div className="confirmBox" >
            <div className="confirmBoxText">
                Etes vous sûr de vouloir modifier cet {subject || "élément"}
            </div>
            <div className="row">
                <div className="col col-sm-6 btnAction yesAction" onClick={()=> yesAction()} >
                    Oui
               </div>
                <div className="col col-sm-6 btnAction noAction" onClick={()=> noAction()} >
                    Non
               </div>
            </div>
        </div>
    )
}

export default Confirm;