import '../../styles/App.css';

const  LoadingBar = ({sections}) => {
    console.log('update bar comp', sections)
    const numCompletedSections = sections.filter(s => s === 'completed').length

    
    const barSections = sections.map((s,i) => {
        const first = i === 0;
        const last = i === sections.length - 1;
        const sectionDone = i < numCompletedSections;
        const incompleteTotal  = numCompletedSections < sections.length;

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