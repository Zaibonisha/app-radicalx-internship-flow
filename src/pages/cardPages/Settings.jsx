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
import  Checkbox  from '@mui/material/Checkbox';
import axios from 'axios';



//import SecondCardComponent from '../components/SecondCardComponent';

// Define CardComponent function component separately

const SecondCardComponent = ({ title, description, location, category, categoryDescription, linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [validationResult, setValidationResult] = useState({ success: false, message: '' });

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen(prevState => !prevState);
  };

  const handleCardClick = () => {
    setIsFieldOpen(!isFieldOpen);
  };

  const OptionsPanel = () => {
    const [searchText, setSearchText] = useState('');
    const [url, setUrl] = useState('');
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };

    const handleUrlChange = (event) => {
      setUrl(event.target.value);
      setValidationResult({ success: false, message: '' });
    };

    const handleCheckbox1Change = (event) => {
      setCheckbox1(event.target.checked);
    };

    const handleCheckbox2Change = (event) => {
      setCheckbox2(event.target.checked);
    };

    const handleSubmit = async () => {
      if (url.trim() === '') {
        setValidationResult({ success: false, message: 'URL field is required' });
      } else {
        try {
          // Perform additional validation or submit the data
          const response = await axios.post('/api/internships', {
            url,
            checkbox1,
            checkbox2,
          });

          // Assuming the server responds with the newly created internship object
          const newInternship = response.data;

          setValidationResult({ success: true, message: 'Success! Data submitted.' });
          console.log('New internship:', newInternship);
        } catch (error) {
          // Handle any errors that occur during the request
          setValidationResult({ success: false, message: 'Error occurred while submitting data' });
          console.error(error);
        }
      }
    };

    return (
      <div style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '25vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="h4">
              Internship URL
            </Typography>

            <div>
              <input type="text" value={url} onChange={handleUrlChange} placeholder="Enter URL" style={{ marginBottom: '10px', width: '100%', padding: '5px' }} />
            </div>
            <div>
              <Typography variant="subtitle1" component="h6">
                Access:
              </Typography>
              <div>
                <Checkbox checked={checkbox1} onChange={handleCheckbox1Change} />
                <Typography variant="body1" component="span">
                  Private Internship
                </Typography>
              </div>
              <div>
                <Checkbox checked={checkbox2} onChange={handleCheckbox2Change} />
                <Typography variant="body1" component="span">
                  Hidden Internship
                </Typography>
              </div>
            </div>

            <div>
              <Typography variant="subtitle1" component="h6">
                Security:
              </Typography>
              <div>
                <Checkbox checked={checkbox1} onChange={handleCheckbox1Change} />
                <Typography variant="body1" component="span">
                  Disable Text Copying
                </Typography>
              </div>
            </div>

            {validationResult.message && (
              <div style={{ color: validationResult.success ? 'green' : 'red' }}>
                {validationResult.message}
              </div>
            )}

            <button onClick={handleSubmit}>Submit</button>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>

      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '5vw', width: '43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }} onClick={handleCardClick}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu" />
              <div style={{ marginBottom: '10px' }}>
                <Typography  component="h6">
                  Basic Settings
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
          <OptionsPanel />
        </div>
      )}
    </div>
  );
};
const ThirdCardComponent = ({
  title,
  description,
  location,
  category,
  categoryDescription,
  linkTo,
  onThirdCardComponentClick
}) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [imageError, setImageError] = useState('');

  const handleLinkClick = () => {
    setIsFieldOpen(!isFieldOpen);
    onThirdCardComponentClick();
  };

  const OptionsPanel = () => {
    const [searchText, setSearchText] = useState('');
    const [url, setUrl] = useState('');
    const [checkbox1, setCheckbox1] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };

    const handleUrlChange = (event) => {
      setUrl(event.target.value);
    };

    const handleCheckbox1Change = (event) => {
      setCheckbox1(event.target.checked);
    };

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };

    const validateTitle = () => {
      if (!title) {
        setTitleError('Title is required.');
      } else {
        setTitleError('');
      }
    };

    const validateImage = () => {
      if (!selectedImage) {
        setImageError('Image is required.');
      } else {
        setImageError('');
      }
    };

    const handleSubmit = () => {
      validateTitle();
      validateImage();

      const isFormValid = !titleError && !imageError;

      if (isFormValid) {
        // TODO: Perform form submission
      } else {
        // TODO: Display error message or prevent form submission
      }
    };

    return (
      <div style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '15vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="h4">
              Hero Image
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <SearchIcon style={{ marginRight: '10px' }} />
              <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search..."
                style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }}
              />
            </div>

            <div>
              <Typography variant="subtitle1" component="h6">
                Upload Image:
              </Typography>
              <input type="file" onChange={handleImageUpload} accept="image/*" style={{ marginBottom: '10px' }} />
            </div>

            {/* Display error messages */}
            {titleError && <p>{titleError}</p>}
            {imageError && <p>{imageError}</p>}

            <button onClick={handleSubmit}>Submit</button>
          </CardContent>
        </Card>
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
                  Hero Image
                </Typography>
              </div>
              <div>
                <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
                  <IconButton edge="start" color="black" aria-label="back">
                    <ArrowRightIcon />
                  </IconButton>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ position: 'relative', flexGrow: 1 }}>
          <OptionsPanel />
        </div>
      )}
    </div>
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
    const [ setIsButtonLabelChanged] = useState(false);
  
    const handleButtonClick = () => {
      setIsButtonLabelChanged(true);
      // Add any other functionality you want to perform on button click
    };
  
    return (
      <Card style={{ height: '75px', width: '85vw', position: 'relative' }}>
        <CardContent style={{ textAlign: 'center' }}>
          <Link to="/AddSurvey">
            <IconButton edge="start" color="black" aria-label="back" style={{ position: 'absolute', top: 0, left: 0 }}>
              <ArrowBackIcon />
              <Typography variant="h7" component="h6">
                Back
              </Typography>
            </IconButton>
          </Link>
  
          <Typography variant="h5" component="h3">
            Add New Internship
          </Typography>
  
          <Button
            variant="contained"
            color="primary"
            style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'purple' }}
            onClick={handleButtonClick}
          >
            {isThirdCardComponentClicked ? 'Publish Internship' : 'Continue to next step'}
            <ArrowForwardIosIcon style={{ marginLeft: '5px' }} />
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  
  
  function SecondTopCardComponent({ isThirdCardComponentClicked }) {
    const [ setIsLinkClicked] = useState(false);
  
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
           <CheckCircleOutlineIcon style={{ color: 'purple', marginRight: '5px' }} /> 
            <Typography style={{ textAlign: 'right', color: 'gray' }} variant="body1" component="p">
              Surveys
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          {isThirdCardComponentClicked ? <CheckCircleOutlineIcon style={{ color: 'purple', marginRight: '5px' }} /> : <DataUsageIcon style={{ color: 'gray', marginRight: '5px' }} />}
            <Typography style={{ textAlign: 'right', color: 'black' }} variant="body1" component="p">
               Settings
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  function Settings() {
    const [isThirdCardComponentClicked, setIsThirdCardComponentClicked] = useState(false);
    
      // Add any additional logic here
    
  const handleThirdCardComponentClick = () => {
    setIsThirdCardComponentClicked(true);
  };
    
    return (
      // JSX content using TopCardComponent and CardComponent
      <div>
        <TopCardComponent isThirdCardComponentClicked={isThirdCardComponentClicked} />
        <SecondTopCardComponent isThirdCardComponentClicked={isThirdCardComponentClicked}/>
        <SecondCardComponent/>
        <ThirdCardComponent onThirdCardComponentClick={handleThirdCardComponentClick}/>
        
        
        
      </div>
        
    );
  }
  
  export default Settings;