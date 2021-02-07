import React, { useContext } from 'react'
import AlertiContext from '../../context/alerti/alertiContext';

const Alerti = () => {
    const alertiContext = useContext(AlertiContext);

    const { alerti } = alertiContext;

    return (
        alerti != null && (
            <div className={`alert alert-${alerti.type}`}>
                <i className="fas fa-info-circle"/> {alerti.msg}
            </div>
        )
    )
};


export default Alerti