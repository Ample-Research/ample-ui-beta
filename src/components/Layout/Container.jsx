import '../../styles/App.css';
import OutputWrapper from '../TrainingDataOutput/OutputWrapper';
import InputForm from '../InputForm/InputForm';
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import ContainerHeader from './ContainerHeader';

const  Container = () => {
    const [trainingInputs, setTrainingInputs] = useState({})

    return (
        <article className="container">
            {isEmpty(trainingInputs) &&
                <InputForm setTrainingInputs={setTrainingInputs}/>
            }
            {!isEmpty(trainingInputs) &&
                <>
                    <ContainerHeader trainingInputs={trainingInputs}/>
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