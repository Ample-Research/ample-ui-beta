import '../../styles/App.css'

const  Text = ({content}) => {

    return (
        <div className="scrollable-text-page">
            {content}
        </div>
    );
}

export default Text;