import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { UserDataDisplay } from '../components/UserDataDisplay';
import { InputForm } from '../components/InputForm';
import { useState } from 'react';

/***
 * Component to detail ID token claims with a description for each claim. For more details on ID token claims, please check the following links:
 * ID token Claims: https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token
 * Optional Claims:  https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set
 */
export const Home = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    const [submitted, setSubmitted] = useState(false);
    const [trainingInfo, setTrainingInfo] = useState({fileName: "", fileContent: "", tone: "", useCase: "", q1:"", a1:"", q2:"", a2:"", q3: "", a3:""});

    return (
        <>
            <AuthenticatedTemplate>
                {activeAccount ? (
                    <Card 
                        bg='dark'
                        text='light'
                        style={{ width: '80vw', height: '72vh' }}
                        border="light"
                    >
                        {
                            !submitted &&
                            <>
                            <Card.Header as="h4">Create New Training Data</Card.Header>
                            <Card.Body style={{ height: '62vh' }}>
                                <div style={{ height: '62vh' }} className="overflow-scroll">
                                    <InputForm setSubmitted={setSubmitted} redoInputs={trainingInfo} setTrainingInfo={setTrainingInfo}/>
                                </div>
                            </Card.Body>
                            </>
                        }
                        {
                            submitted &&
                            <>
                            <Card.Header as="h4">Training Data Created</Card.Header>
                            <Card.Body style={{ height: '62vh' }}>
                                <div style={{ height: '62vh' }} className="overflow-scroll">
                                    <h5><strong>{trainingInfo.fileName}</strong></h5>
                                    <p><strong>TONE: </strong>{trainingInfo.tone}</p>
                                    <p><strong>USE CASE: </strong>{trainingInfo.useCase}</p>
                                    <Button variant="light">
                                        Download Question and Answer Pairs
                                    </Button>
                                    <div style={{display: "flex", marginTop: "20px", justifyContent: "space-between", width: "20vw"}}>
                                        <Button variant="primary" onClick={()=> {
                                            setSubmitted(false)
                                        }}>
                                            Redo Training Data
                                        </Button>
                                        <Button variant="primary" onClick={()=> {
                                            setTrainingInfo({})
                                            setSubmitted(false)
                                        }}>
                                            Start Over
                                        </Button>
                                    </div>
                                </div>
                            </Card.Body>
                            </>
                        }
                    </Card>
                ) : null}
                {/* {activeAccount ? (
                    <Container>
                        <UserDataDisplay idTokenClaims={activeAccount.idTokenClaims} />
                    </Container>
                ) : null} */}
            </AuthenticatedTemplate>
        </>
    );
};