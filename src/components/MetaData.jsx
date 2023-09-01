import '../styles/App.css';

const  MetaData = ({taskInfo}) => {
   const tags = taskInfo.tags.map(t => {
        return <p key={'tag-' + t}  className="data-tag">{t}</p>
    })
console.log(tags)
    return (
        <div className="meta-data">
            <p>Q&A pairs: <strong>{taskInfo.pairs}</strong></p>
            <div className="data-tags">tags:{tags}</div>
        </div>
    );
}

export default MetaData;