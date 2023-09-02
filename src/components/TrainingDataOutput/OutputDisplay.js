const OutputDisplay = ({ taskInfo, clear }) => {
        const tags = taskInfo.tags.map(t => {
            return <p key={'tag-' + t}  className="data-tag">{t}</p>
        })

        return (
            <>
                <div>
                    <a href={taskInfo.download_link}>
                        <button className="download-data-button">DOWNLOAD</button>
                    </a>
                    <button className="generate-another-button" onClick={clear}>GENERATE ANOTHER -></button>
                </div>
                <div className="meta-data">
                    <p>Q&A pairs: <strong>{taskInfo.num_QA_pairs}</strong></p>
                    <div className="data-tags">tags:{tags}</div>
                </div>
            </>
        );
};

export default OutputDisplay;
