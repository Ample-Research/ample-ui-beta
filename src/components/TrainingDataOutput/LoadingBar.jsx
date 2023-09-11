import { useEffect, useState } from 'react';
import '../../styles/App.css';
import isEmpty from 'lodash/isEmpty';

const  LoadingBar = ({taskInfo}) => {

    const [sectionsComplete, setSectionsComplete] = useState(0)
    const [sections, setSections] = useState([])

    useEffect(() => {
        const sectionValues = isEmpty(taskInfo?.section_tracker) ? [] : Object.values(taskInfo.section_tracker);
        const numCompletedSections = sectionValues.filter(s => s === 'completed').length
        setSections(sectionValues)
        setSectionsComplete(numCompletedSections)
    }, [taskInfo])

    useEffect(()=>{

    }, [sections, sectionsComplete])

    const barSections = sections.map((s,i) => {
        const first = i === 0;
        const last = i === sections.length - 1;
        const sectionDone = i < sectionsComplete;
        const incompleteTotal  = sectionsComplete < sections.length;

        return (
        <div key={'section-' + i} 
            style={{
                width: `${400 / sections.length}px`,
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