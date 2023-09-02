import '../../styles/App.css';
import OutputWrapper from '../TrainingDataOutput/OutputWrapper';
import InputForm from '../InputForm/InputForm';
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';

const  Container = () => {
    const [trainingInputs, setTrainingInputs] = useState({})

    return (
        <article className="container">
            {isEmpty(trainingInputs) &&
                <InputForm setTrainingInputs={setTrainingInputs}/>
            }
            {!isEmpty(trainingInputs) &&
                <>
                    <div className="container-header">
                        <h4>{trainingInputs.title}</h4>
                        <p>{trainingInputs.file[0].name + ", " + (trainingInputs.file[0].size / 1000) + 'mb'}</p>
                    </div>
                    <OutputWrapper 
                        trainingInputs={trainingInputs}
                        setTrainingInputs={setTrainingInputs}
                    />
                </>
            }
        </article>
    );
}

export default Container;