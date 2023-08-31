import '../styles/App.css';
import React, { useEffect, useState } from 'react';

const  LoadingBar = ({taskInfo}) => {

    const completedSections = taskInfo.sections.filter(s => s.status === 'complete').length;
    
    const barSections = taskInfo.sections.map((s,i) => {
        console.log(i, completedSections)

        const first = i === 0;
        const last = i === taskInfo.sections.length - 1;
        const sectionDone = i < completedSections;
        const incompleteTotal  = completedSections < taskInfo.sections.length;

        return (
        <div key={'section-' + i} 
            style={{
                width: `${300 / taskInfo.sections.length}px`,
                borderTopLeftRadius: first ? '10px' : 0,
                borderBottomLeftRadius: first ? '10px' : 0,
                borderTopRightRadius: last ? '10px' : 0,
                borderBottomRightRadius: last ? '10px' : 0,
                borderRight: last ? 'none' : '1px dashed #FDFDFD',
                background: sectionDone ? 
                incompleteTotal ?
                        'rgba(201, 66, 77, 0.50)' : 
                        'rgba(201, 66, 77, 0.90)' : 
                    'none'
                }} 
            className="loading-bar-section"
            >
        </div>)
    })

    return (
        <div className="loading-bar">
            {barSections}
        </div>
    );
}

export default LoadingBar;