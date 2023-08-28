import './styles/App.css';

const  LoadingBar = ({sections, sectionsComplete}) => {
    const barSections = sections.map((s,i) => {
        return (
        <div key={'section-' + i} 
            style={{
                background: i < sectionsComplete ? 
                    sectionsComplete < sections ?
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