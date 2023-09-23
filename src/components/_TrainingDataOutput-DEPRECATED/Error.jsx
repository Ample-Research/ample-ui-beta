import '../../styles/App.css'

const  Error = ({clear}) => {

    return (
        <div className="error">
            <h4>There was a problem processing your training inputs. Please try again.</h4>
            <button className="transparent-button button" onClick={clear}>{"TRY AGAIN"}</button>
        </div>
    );
}

export default Error;
