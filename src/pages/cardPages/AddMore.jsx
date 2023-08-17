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
import axios from 'axios';
import { Schedule } from '@mui/icons-material';
//import SecondCardComponent from '../components/SecondCardComponent';

// Define CardComponent function component separately

const Overview = ({ title, description, location, category, categoryDescription, linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [validationResults, setValidationResults] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen((prevState) => !prevState);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const validateFields = () => {
    const results = {};
    const errors = {};

    if (!title) {
      results.title = false;
      errors.title = 'Title is required.';
    } else {
      results.title = true;
    }

    // Perform similar validations for other fields

    setValidationResults(results);
    setErrorMessages(errors);

    return Object.values(results).every((value) => value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    const isValid = validateFields();

    if (isValid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form validation failed.');
    }
  };

  const handleServerError = (statusCode) => {
    if (statusCode === 404) {
      // Handle 404 Not Found error
      console.error('Resource not found.');
    } else if (statusCode === 500) {
      // Handle 500 Internal Server Error
      console.error('Internal server error occurred.');
    } else {
      // Handle other error codes
      console.error('An error occurred. Status code: ', statusCode);
    }
  };
  const OptionsPanel = () => {
    const [searchText, setSearchText] = useState('');
    const [options, setOptions] = useState(['Option 1', 'Option 2']);

    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };

    const handleDeleteOption = (index) => {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    };

    const handleDrop = (event) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      const newOptions = [...options];
      for (let i = 0; i < files.length; i++) {
        newOptions.push(files[i].name);
      }
      setOptions(newOptions);
    };

    const handleButtonClick = () => {
      document.getElementById('fileInput').click();
    };

  
    return (
      <div style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '25vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="h4">
              Brief
            </Typography>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Button variant="outlined"
              color="primary"
        
                style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }} onClick={handleButtonClick}>
                Drag and Drop Files  <CloudUploadIcon/>
              </Button>
              <input id="fileInput" type="file" style={{ display: 'none' }} multiple onChange={(event) => handleDrop({ dataTransfer: { files: event.target.files } })} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {options.map((option, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                  <button style={{ width:'10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}>
                    {option}
                    <ClearIcon style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', width: '20px' }} onClick={() => handleDeleteOption(index)} />
                  </button>
                </div>
              ))}
            </div>
            <Typography variant="h5" component="h4">
              Requirements
            </Typography>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Button variant="outlined"
              color="primary"
        
                style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }} onClick={handleButtonClick}>
                Drag and Drop Files  <CloudUploadIcon/>
              </Button>
              <input id="fileInput" type="file" style={{ display: 'none' }} multiple onChange={(event) => handleDrop({ dataTransfer: { files: event.target.files } })} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {options.map((option, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                  <button style={{ width:'10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}>
                    {option}
                    <ClearIcon style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', width: '20px' }} onClick={() => handleDeleteOption(index)} />
                  </button>
                </div>
              ))}
            </div>
            <Typography variant="h5" component="h4">
              Milestones
            </Typography>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Button variant="outlined"
              color="primary"
        
                style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }} onClick={handleButtonClick}>
                Drag and Drop Files  <CloudUploadIcon/>
              </Button>
              <input id="fileInput" type="file" style={{ display: 'none' }} multiple onChange={(event) => handleDrop({ dataTransfer: { files: event.target.files } })} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {options.map((option, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                  <button style={{ width:'10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}>
                    {option}
                    <ClearIcon style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', width: '20px' }} onClick={() => handleDeleteOption(index)} />
                  </button>
                </div>
              ))}
            </div>
            
          </CardContent>
        </Card>
      
      </div>
      
    );
  }

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: isExpanded ? '18vw' : '5vw', width:'43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }} onClick={handleCardClick}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu" />
              <div style={{ marginBottom: '10px' }}>
                <Typography  component="h6">
                  Overview
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
            {isExpanded && (
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* First nested flexbox */}
          <form className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'37vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }} onSubmit={handleSubmit}>
          <div className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'35vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h7" component="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon /> 
              Brief
            </Typography>
          </div>

          {/* Second nested flexbox */}
          <div className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'35vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h7" component="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon /> 
              Requirements
            </Typography>
          </div>

          {/* Third nested flexbox */}
          <div className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'35vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h7" component="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon />
              Milestones
            </Typography>
          </div>  
          <button type="submit" style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '36vw', display: 'flex', alignItems: 'center',justifyContent: 'center', }}>
          <AddBoxOutlinedIcon style={{ marginRight: '5px' }} />ADD MORE
          </button>
          </form>
          
        </div>
        
      </div>
    )}
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ position: 'relative', flexGrow: 1 }}>
          <OptionsPanel />
        </div>
      )}

      {/* Display error messages for the title field */}
      {!validationResults.title && (
        <div style={{ color: 'red' }}>{errorMessages.title}</div>
      )}
    </div>
  );
}
const ScheduleField = ({ title, description, location, category, categoryDescription, linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [validationResults, setValidationResults] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen((prevState) => !prevState);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const validateFields = () => {
    const results = {};
    const errors = {};

    if (!title) {
      results.title = false;
      errors.title = 'Title is required.';
    } else {
      results.title = true;
    }

    // Perform similar validations for other fields

    setValidationResults(results);
    setErrorMessages(errors);

    return Object.values(results).every((value) => value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    const isValid = validateFields();

    if (isValid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form validation failed.');
    }
  };

  const handleServerError = (statusCode) => {
    if (statusCode === 404) {
      // Handle 404 Not Found error
      console.error('Resource not found.');
    } else if (statusCode === 500) {
      // Handle 500 Internal Server Error
      console.error('Internal server error occurred.');
    } else {
      // Handle other error codes
      console.error('An error occurred. Status code: ', statusCode);
    }
  };
  const OptionsPanel = () => {
    const [searchText, setSearchText] = useState('');
    const [options, setOptions] = useState(['Option 1', 'Option 2']);

    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };

    const handleDeleteOption = (index) => {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    };

    const handleDrop = (event) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      const newOptions = [...options];
      for (let i = 0; i < files.length; i++) {
        newOptions.push(files[i].name);
      }
      setOptions(newOptions);
    };

    const handleButtonClick = () => {
      document.getElementById('fileInput').click();
    };

  
    return (
      <div style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '25vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="h4">
              Brief
            </Typography>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Button variant="outlined"
              color="primary"
        
                style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }} onClick={handleButtonClick}>
                Drag and Drop Files  <CloudUploadIcon/>
              </Button>
              <input id="fileInput" type="file" style={{ display: 'none' }} multiple onChange={(event) => handleDrop({ dataTransfer: { files: event.target.files } })} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {options.map((option, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                  <button style={{ width:'10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}>
                    {option}
                    <ClearIcon style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', width: '20px' }} onClick={() => handleDeleteOption(index)} />
                  </button>
                </div>
              ))}
            </div>
            <Typography variant="h5" component="h4">
              Requirements
            </Typography>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Button variant="outlined"
              color="primary"
        
                style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }} onClick={handleButtonClick}>
                Drag and Drop Files  <CloudUploadIcon/>
              </Button>
              <input id="fileInput" type="file" style={{ display: 'none' }} multiple onChange={(event) => handleDrop({ dataTransfer: { files: event.target.files } })} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {options.map((option, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                  <button style={{ width:'10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}>
                    {option}
                    <ClearIcon style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', width: '20px' }} onClick={() => handleDeleteOption(index)} />
                  </button>
                </div>
              ))}
            </div>
            <Typography variant="h5" component="h4">
              Milestones
            </Typography>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Button variant="outlined"
              color="primary"
        
                style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }} onClick={handleButtonClick}>
                Drag and Drop Files  <CloudUploadIcon/>
              </Button>
              <input id="fileInput" type="file" style={{ display: 'none' }} multiple onChange={(event) => handleDrop({ dataTransfer: { files: event.target.files } })} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {options.map((option, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                  <button style={{ width:'10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}>
                    {option}
                    <ClearIcon style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', width: '20px' }} onClick={() => handleDeleteOption(index)} />
                  </button>
                </div>
              ))}
            </div>
            
          </CardContent>
        </Card>
      
      </div>
      
    );
  }

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: isExpanded ? '18vw' : '5vw', width:'43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }} onClick={handleCardClick}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu" />
              <div style={{ marginBottom: '10px' }}>
                <Typography  component="h6">
                  Schedule
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
            {isExpanded && (
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* First nested flexbox */}
          <form className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'37vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }} onSubmit={handleSubmit}>
          <div className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'35vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h7" component="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon /> 
              Duration
            </Typography>
          </div>

          {/* Second nested flexbox */}
          <div className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'35vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h7" component="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon /> 
              Timeline
            </Typography>
          </div>

          {/* Third nested flexbox */}
          <div className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'35vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h7" component="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon />
              Deliverables
            </Typography>
          </div>  
          <button type="submit" style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '36vw', display: 'flex', alignItems: 'center',justifyContent: 'center', }}>
          <AddBoxOutlinedIcon style={{ marginRight: '5px' }} />ADD MORE
          </button>
          </form>
          
        </div>
        
      </div>
    )}
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ position: 'relative', flexGrow: 1 }}>
          <OptionsPanel />
        </div>
      )}

      {/* Display error messages for the title field */}
      {!validationResults.title && (
        <div style={{ color: 'red' }}>{errorMessages.title}</div>
      )}
    </div>
  );
}
const Resources = ({ title,linkTo, description, location, category, categoryDescription, onResourcesClick }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [validationResults, setValidationResults] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen((prevState) => !prevState);
    onResourcesClick(); // Call the prop function to update the state in the parent component
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const validateFields = () => {
    const results = {};
    const errors = {};

    if (!title) {
      results.title = false;
      errors.title = 'Title is required.';
    } else {
      results.title = true;
    }

    // Perform similar validations for other fields

    setValidationResults(results);
    setErrorMessages(errors);

    return Object.values(results).every((value) => value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    const isValid = validateFields();

    if (isValid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form validation failed.');
    }
  };

  const handleAPIRequest = () => {
    fetch('https://api.example.com/resource')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status.toString());
        }
        return response.json();
      })
      .then(data => {
        // Process data
      })
      .catch(error => {
        handleServerError(error.message);
      });
  };

  const handleServerError = (statusCode) => {
    if (statusCode === '404') {
      setErrorMessages(prevState => ({
        ...prevState,
        general: 'Resource not found.'
      }));
    } else if (statusCode === '500') {
      setErrorMessages(prevState => ({
        ...prevState,
        general: 'Internal server error occurred.'
      }));
    } else {
      setErrorMessages(prevState => ({
        ...prevState,
        general: `An error occurred. Status code: ${statusCode}`
      }));
    }
  };
  const OptionsPanel = () => {
    const [searchText, setSearchText] = useState('');
    const [options, setOptions] = useState(['Option 1', 'Option 2']);
    const [validationStatus, setValidationStatus] = useState(false);
  
    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const handleDeleteOption = (index) => {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      const newOptions = [...options];
      for (let i = 0; i < files.length; i++) {
        newOptions.push(files[i].name);
      }
      setOptions(newOptions);
    };
  
    const handleButtonClick = () => {
      document.getElementById('fileInput').click();
    };
  
    const validateFields = () => {
      // Perform your validation logic here
      // Return true if all fields are valid, otherwise return false
      // For demonstration purposes, assuming a simple validation
      return options.length > 0;
    };
  
    const handleValidationClick = () => {
      const isValid = validateFields();
      setValidationStatus(isValid);
    };
  
  
    return (
      <div style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '25vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="h4">
              Curated Resources
            </Typography>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Button variant="outlined"
              color="primary"
        
                style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }} onClick={handleButtonClick}>
                Drag and Drop Files  <CloudUploadIcon/>
              </Button>
              <input id="fileInput" type="file" style={{ display: 'none' }} multiple onChange={(event) => handleDrop({ dataTransfer: { files: event.target.files } })} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {options.map((option, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                  <button style={{ width:'10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}>
                    {option}
                    <ClearIcon style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', width: '20px' }} onClick={() => handleDeleteOption(index)} />
                  </button>
                </div>
              ))}
            </div>
            <Typography variant="h5" component="h4">
            Events
            </Typography>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Button variant="outlined"
              color="primary"
        
                style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '43vw' }} onClick={handleButtonClick}>
                Drag and Drop Files  <CloudUploadIcon/>
              </Button>
              <input id="fileInput" type="file" style={{ display: 'none' }} multiple onChange={(event) => handleDrop({ dataTransfer: { files: event.target.files } })} />
             
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <button
                type="button"
                onClick={handleValidationClick}
                style={{ backgroundColor: 'blue', borderRadius: '5px', color: 'white', height:'5vh', width: '10vw', marginBottom: '10px' }}
              >
                VALIDATE FIELDS
              </button>
            </div>
            {validationStatus && (
              <div style={{ color: 'red', marginBottom: '10px' }}>Validation {validationStatus ? 'successful' : 'failed'}.</div>
            )}
            
          </CardContent>
        </Card>
      
      </div>
      
    );
  }

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: isExpanded ? '18vw' : '5vw', width:'43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }} onClick={handleCardClick}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu" />
              <div style={{ marginBottom: '10px' }}>
                <Typography  component="h6">
                  Resources
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
            {isExpanded && (
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* First nested flexbox */}
          <form className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'37vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }} onSubmit={handleSubmit}>
          <div className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'35vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h7" component="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon /> 
              Curated resources
            </Typography>
          </div>

          {/* Second nested flexbox */}
          <div className="flexbox" style={{ justifyContent: 'center', alignItems: 'center', border: '1px solid gray', width:'35vw', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h7" component="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon /> 
              Events
            </Typography>
          </div>

          
          <button type="submit" style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '36vw', display: 'flex', alignItems: 'center',justifyContent: 'center', }}>
          <AddBoxOutlinedIcon style={{ marginRight: '5px' }} />ADD MORE
          </button>
          </form>
          
        </div>
        
      </div>
    )}
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ position: 'relative', flexGrow: 1 }}>
          <OptionsPanel />
        </div>
      )}

      {/* Display error messages for the title field */}
      {!validationResults.title && (
        <div style={{ color: 'red' }}>{errorMessages.title}</div>
      )}
    </div>
  );
}
const AddChapterButton = ({ onAddCard }) => {
  const handleAddMore = () => {
    onAddCard();
  };

  return (
    <Link to="/AddSurvey">
      <Button
        variant="outlined"
        color="primary"
        onClick={handleAddMore}
        style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '45vw' }}
      >
        Add Chapter
      </Button>
    </Link>
  );
};
const AddMoreButton = ({ onAddCard }) => {
  const handleAddMore = () => {
    onAddCard();
  };

  return (
    <Link to="">
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



function TopCardComponent({ isResourcesClicked }) {
  return (
    <Card style={{ height: '75px', width: '85vw', position: 'relative' }}>
      <CardContent style={{ textAlign: 'center' }}>
        <Link to="/NewInternship">
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
        <Link to="/AddSurvey">
        <Button
          variant="contained"
          color="primary"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: isResourcesClicked ? 'purple' : 'grey',
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

function StatusBar({ isResourcesClicked }) {
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
        {isResourcesClicked ? <CheckCircleOutlineIcon style={{ color: 'purple', marginRight: '5px' }} /> : <DataUsageIcon style={{ color: 'gray', marginRight: '5px' }} />}
          <Typography style={{ textAlign: 'right', color: 'black' }} variant="body1" component="p">
            Internship Guide
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DataUsageIcon style={{ color: 'lightgray', marginRight: '5px' }} />
          <Typography style={{ textAlign: 'right', color: 'lightgray' }} variant="body1" component="p">
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


function AddMore() {
  // Rest of the code
  const [isResourcesClicked, setIsResourcesClicked] = useState(false);

  const handleResourcesClick = () => {
    setIsResourcesClicked(true);
  };
  const handleSubmit = () => {
    // Handle form submission logic here
    // You can add your implementation for form submission
    console.log('Form submitted!');
  };
  return (
    // JSX content using TopCardComponent and CardComponent
    <div>
      <TopCardComponent isResourcesClicked={isResourcesClicked} />
      <StatusBar isResourcesClicked={isResourcesClicked} />
      <Overview onSubmit={handleSubmit}/>
      <ScheduleField/>
      <Resources onResourcesClick={handleResourcesClick} />
      <AddChapterButton/>
      
      
    </div>
      
  );
}

export default AddMore;
