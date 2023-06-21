import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Collapse from '@mui/material/Collapse';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';



//import SecondCardComponent from '../components/SecondCardComponent';

// Define CardComponent function component separately


const SecondCardComponent = ({ title, description, location, category, categoryDescription, linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [validationError, setValidationError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen(prevState => !prevState);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const validateFields = () => {
    if (questions.length === 0) {
      setValidationError(true);
      setSuccessMessage('');
    } else {
      setValidationError(false);
      setSuccessMessage('Fields are valid!');
    }
  };

  const QuestionList = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {questions.map((question, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
            <input
              type="text"
              value={question}
              onChange={(event) => handleQuestionChange(index, event.target.value)}
              placeholder="Enter question..."
              style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }}
            />
            <ClearIcon style={{ cursor: 'pointer' }} onClick={() => handleDeleteQuestion(index)} />
          </div>
        ))}
        {isFieldOpen && (
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
            <input
              type="text"
              value=""
              onChange={() => {}}
              placeholder="Enter question..."
              style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }}
            />
            <ClearIcon style={{ cursor: 'pointer' }} onClick={() => {}} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>

      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '5vw', width: '43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu" />
              <div style={{ marginBottom: '10px' }}>
                <Typography component="h6">
                  Survey 1
                </Typography>
              </div>
              <div>
                <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
                  <IconButton edge="start" color="black" aria-label="back">
                    <ArrowRightIcon />
                  </IconButton>
                </Link>
              </div>
              {isChecked && (
                <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ position: 'relative', flexGrow: 1 }}>
          <Card style={{ height: '10vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" component="h4">
                Add Questions
              </Typography>
              <QuestionList />
              {validationError && (
                <p style={{ color: 'red' }}>Please add at least one question.</p>
              )}
              {successMessage && (
                <p style={{ color: 'green' }}>{successMessage}</p>
              )}
              <button
                style={{ width: '10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}
                onClick={handleAddQuestion}
              >
                Add Question
              </button>
              <button
                style={{ width: '10vw', backgroundColor: 'blue', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'white', marginTop: '10px' }}
                onClick={validateFields}
              >
                Validate Fields
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

const ThirdCardComponent = ({ title, description, location, category, categoryDescription, linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [validationError, setValidationError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen(prevState => !prevState);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const validateFields = () => {
    if (questions.length === 0) {
      setValidationError(true);
      setSuccessMessage('');
    } else {
      setValidationError(false);
      setSuccessMessage('Fields are valid!');
    }
  };

  const QuestionList = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {questions.map((question, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
            <input
              type="text"
              value={question}
              onChange={(event) => handleQuestionChange(index, event.target.value)}
              placeholder="Enter question..."
              style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }}
            />
            <ClearIcon style={{ cursor: 'pointer' }} onClick={() => handleDeleteQuestion(index)} />
          </div>
        ))}
        {isFieldOpen && (
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
            <input
              type="text"
              value=""
              onChange={() => {}}
              placeholder="Enter question..."
              style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }}
            />
            <ClearIcon style={{ cursor: 'pointer' }} onClick={() => {}} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>

      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '5vw', width: '43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu" />
              <div style={{ marginBottom: '10px' }}>
                <Typography component="h6">
                  Survey 2
                </Typography>
              </div>
              <div>
                <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
                  <IconButton edge="start" color="black" aria-label="back">
                    <ArrowRightIcon />
                  </IconButton>
                </Link>
              </div>
              {isChecked && (
                <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ position: 'relative', flexGrow: 1 }}>
          <Card style={{ height: '10vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" component="h4">
                Add Questions
              </Typography>
              <QuestionList />
              {validationError && (
                <p style={{ color: 'red' }}>Please add at least one question.</p>
              )}
              {successMessage && (
                <p style={{ color: 'green' }}>{successMessage}</p>
              )}
              <button
                style={{ width: '10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}
                onClick={handleAddQuestion}
              >
                Add Question
              </button>
              <button
                style={{ width: '10vw', backgroundColor: 'blue', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'white', marginTop: '10px' }}
                onClick={validateFields}
              >
                Validate Fields
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
const AddSettingsButton = ({ onAddCard }) => {
    const handleAddMore = () => {
      onAddCard();
    };
  
    return (
      <Link to="/Settings">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddMore}
          style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }}
        >
          Add Settings
        </Button>
      </Link>
    );
  };
  const AddMoreButton = ({ onAddCard }) => {
    const handleAddMore = () => {
      onAddCard();
    };
  
    return (
      <Link to="/AddMore">
        <Button
          variant="outlined"
          color="primary"
          
          onClick={handleAddMore}
          style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '36vw' }}
        >
         <AddBoxOutlinedIcon style={{ marginRight: '5px' }} /> Add More
        </Button>
      </Link>
    );
  };
  
  
  
  function TopCardComponent({ isThirdCardComponentClicked }) {
    return (
      <Card style={{ height: '75px', width: '85vw', position: 'relative' }}>
        <CardContent style={{ textAlign: 'center' }}>
          <Link to="/AddMore">
            <IconButton
              edge="start"
              color="black"
              aria-label="back"
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              <ArrowBackIcon />
              <Typography variant="h7" component="h6">
                Back
              </Typography>
            </IconButton>
          </Link>
  
          <Typography variant="h5" component="h3">
            Add New Internship
          </Typography>
          <Link to="/Settings">
          <Button
            variant="contained"
            color="primary"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: isThirdCardComponentClicked ? 'purple' : 'grey',
            }}
          >
            Continue to Next Step
            <ArrowForwardIosIcon style={{ marginLeft: '5px' }} />
          </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }
  
  function StatusBar({ isThirdCardComponentClicked }) {
    const [isLinkClicked, setIsLinkClicked] = useState(false);
  
    const handleLinkClick = () => {
      setIsLinkClicked(true);
      // Call any other functions you need to handle the link click here
    };
    return (
      
      <Card style={{ height: '75px', width: '85vw', backgroundColor: '#f0f0f0', position: 'relative' }}>
        <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleOutlineIcon style={{ color: 'purple', marginRight: '5px' }} />
            <Typography style={{ textAlign: 'left', color: 'lightgray' }} variant="body1" component="p">
              Internship Description
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleOutlineIcon style={{ color: 'purple', marginRight: '5px' }} />
            <Typography style={{ textAlign: 'right', color: 'lightgray' }} variant="body1" component="p">
              Internship Guide 
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          {isThirdCardComponentClicked ? <CheckCircleOutlineIcon style={{ color: 'purple', marginRight: '5px' }} /> : <DataUsageIcon style={{ color: 'gray', marginRight: '5px' }} />}
            <Typography style={{ textAlign: 'right', color: 'dgray' }} variant="body1" component="p">
              Surveys
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DataUsageIcon style={{ color: 'lightgray', marginRight: '5px' }} />
            <Typography style={{ textAlign: 'right', color: 'grey' }} variant="body1" component="p">
               Settings
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
  function AddSurvey() {
    // Rest of the code
    const [isThirdCardComponentClicked, setIsThirdCardComponentClicked] = useState(false);

  const handleThirdCardComponentClick = () => {
    setIsThirdCardComponentClicked(true);
  };
    
    return (
      // JSX content using TopCardComponent and CardComponent
      <div>
        <TopCardComponent isThirdCardComponentClicked={isThirdCardComponentClicked}/>
        <StatusBar isThirdCardComponentClicked={isThirdCardComponentClicked}/>
        <SecondCardComponent/>
        <ThirdCardComponent onThirdCardComponentClick={handleThirdCardComponentClick}/>
        <AddSettingsButton/>
        
        
      </div>
        
    );
  }
  
  export default AddSurvey;