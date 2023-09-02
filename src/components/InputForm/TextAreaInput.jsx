import '../../styles/App.css';
import PropTypes from 'prop-types';

const  TextAreaInput = ({data, register}) => {

    return (
        <div>
          <div className="form-label-group">
            <label className="form-input-label">{data.label}</label>
            <img className="question-icon" src={data.icon} alt="red question mark icon" />
          </div>
          <textarea
            required={data.required}
            className={data.className}
            {...register(data.registerName)}
            defaultValue={data.defaultValue}
          />
        </div>
    );
}

TextAreaInput.propTypes = {
  data: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};

export default TextAreaInput;