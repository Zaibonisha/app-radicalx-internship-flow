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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import axios from 'axios'; 
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
//import SecondCardComponent from '../components/SecondCardComponent';

// Define CardComponent function component separately

const SecondCardComponent = ({ linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState(['Option 1', 'Option 2']);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen((prevState) => !prevState);
    addInternshipToDatabase();
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    // Validate the search field
    const isValid = validateSearchField(value);
    setIsValid(isValid);
    setErrorMessage(isValid ? '' : 'Invalid search field.');
  };

  const validateSearchField = (value) => {
    // Implement your validation logic here
    // Return true if the field is valid, false otherwise
    // You can check for required field, length limits, format constraints, etc.
    return value.length > 0;
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const addInternshipToDatabase = () => {
    if (!isValid) {
      return;
    }

    // Make a request to your database or API to add the internship object
    // Use the value from the searchText or any other necessary fields
    // Example using fetch:
    fetch('https://example.com/api/internships', {
      method: 'POST',
      body: JSON.stringify({ searchText }), // Modify this according to your data structure
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Handle the response
        if (response.ok) {
          console.log('Internship added to the database successfully');
        } else {
          // Throw an error with the status code and status text
          throw new Error(
            `HTTP Error ${response.status}: ${response.statusText}`
          );
        }
      })
      .catch((error) => {
        // Display the error message based on the HTTP status code
        let errorMessage;
        if (error.message.startsWith('HTTP Error')) {
          // Extract the status code and status text from the error message
          const [statusCode, statusText] = error.message.split(':');
          errorMessage = `HTTP Error ${statusCode.trim()}: ${statusText.trim()}`;
        } else {
          errorMessage = 'An error occurred while adding the internship.';
        }
        console.error(errorMessage);

        // Update the state with the error message
        setErrorMessage(errorMessage);
      });
  };

  const OptionsPanel = () => (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <Card
        style={{ height: '10vw', width: '40vw', margin: '10px', borderRadius: '10px' }}
      >
        <CardContent>
          <Typography variant="h5" component="h4">
            Category
          </Typography>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
          >
            <SearchIcon style={{ marginRight: '10px' }} />
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Search..."
              style={{
                flexGrow: '1',
                border: 'none',
                borderBottom: '1px solid #ccc',
                padding: '5px',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {options.map((option, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '10px',
                  marginBottom: '10px',
                }}
              >
                <button
                  style={{
                    width: '10vw',
                    backgroundColor: '#f1f1f1',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    position: 'relative',
                    color: 'purple',
                  }}
                >
                  {option}
                  <ClearIcon
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      cursor: 'pointer',
                      width: '20px',
                    }}
                    onClick={() => handleDeleteOption(index)}
                  />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div
      className="card-wrapper"
      style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}
    >
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card
          style={{
            height: '75px',
            width: '43vw',
            cursor: 'pointer',
            margin: '10px',
            borderRadius: '10px',
          }}
        >
          <CardContent
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu" />
              <Typography variant="h7" component="h6">
                Category
              </Typography>
              {isChecked && (
                <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />
              )}
            </div>
            <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
              <IconButton edge="start" color="black" aria-label="back">
                <ArrowRightIcon />
              </IconButton>
            </Link>
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ position: 'relative', flexGrow: 1 }}>
          <OptionsPanel />
          {isValid ? (
            <p style={{ color: 'green' }}>Search field is valid.</p>
          ) : (
            <p style={{ color: 'red' }}>{errorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

const ThirdCardComponent = ({ linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen(prevState => !prevState);
    addInternshipToDatabase();
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    // Validate the search field
    const isValid = validateSearchField(value);
    setIsValid(isValid);
    setErrorMessage(isValid ? '' : 'Invalid search field.');
  };

  const validateSearchField = (value) => {
    // Implement your validation logic here
    // Return true if the field is valid, false otherwise
    // You can check for required field, length limits, format constraints, etc.
    return value.length > 0;
  };

  const addInternshipToDatabase = () => {
    if (!isValid) {
      return;
    }

    // Make a request to your database or API to add the internship object
    // Use the value from the searchText or any other necessary fields
    // Example using fetch:
    fetch('https://example.com/api/internships', {
      method: 'POST',
      body: JSON.stringify({ searchText }), // Modify this according to your data structure
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Handle the response
        if (response.ok) {
          console.log('Internship added to the database successfully');
        } else {
          throw new Error('Failed to add the internship to the database');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const OptionsPanel = () => (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <Card style={{ height: '10vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
        <CardContent>
          <Typography variant="h5" component="h4">
            Description
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
          {isValid ? (
            <Typography variant="body2" style={{ color: 'green' }}>
              Field is valid.
            </Typography>
          ) : (
            <Typography variant="body2" style={{ color: 'red' }}>
              {errorMessage}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '75px', width: '43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu"></IconButton>
              <Typography variant="h7" component="h6">
                Description
              </Typography>
              {isChecked && <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />}
            </div>
            <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
              <IconButton edge="start" color="black" aria-label="back">
                <ArrowRightIcon />
              </IconButton>
            </Link>
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


const FourthCardComponent = ({ linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen(prevState => !prevState);
    addInternshipToDatabase();
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    // Validate the search field
    const isValid = validateSearchField(value);
    setIsValid(isValid);
    setErrorMessage(isValid ? '' : 'Invalid search field.');
  };

  const validateSearchField = (value) => {
    // Implement your validation logic here
    // Return true if the field is valid, false otherwise
    // You can check for required field, length limits, format constraints, etc.
    return value.length > 0;
  };

  const addInternshipToDatabase = () => {
    if (!isValid) {
      return;
    }

    // Make a request to your database or API to add the internship object
    // Use the value from the searchText or any other necessary fields
    // Example using fetch:
    fetch('https://example.com/api/internships', {
      method: 'POST',
      body: JSON.stringify({ searchText }), // Modify this according to your data structure
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Handle the response
        if (response.ok) {
          console.log('Internship added to the database successfully');
        } else {
          throw new Error(`Failed to add the internship to the database. Status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };

  const OptionsPanel = () => (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <Card style={{ height: '10vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
        <CardContent>
          <Typography variant="h5" component="h4">
            Location
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
          {isValid ? (
            <Typography variant="body2" style={{ color: 'green' }}>
              Field is valid.
            </Typography>
          ) : (
            <Typography variant="body2" style={{ color: 'red' }}>
              {errorMessage}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '75px', width: '43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu"></IconButton>
              <Typography variant="h7" component="h6">
                Location
              </Typography>
              {isChecked && <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />}
            </div>
            <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
              <IconButton edge="start" color="black" aria-label="back">
                <ArrowRightIcon />
              </IconButton>
            </Link>
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

const FifthCardComponent = ({ linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen((prevState) => !prevState);
    addInternshipToDatabase();
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const validateFields = () => {
    // Perform any validation here, return true if valid, false otherwise
    return true;
  };

  const handleValidation = () => {
    if (!validateFields()) {
      setValidationMessage('Validation failed. Please check your inputs.');
      return;
    }
    setValidationMessage('');
    addInternshipToDatabase();
  };

  const addInternshipToDatabase = () => {
    if (!validateFields()) {
      return;
    }

    // Make a request to your database or API to add the internship object
    // Use the values from the searchText or any other necessary fields
    // Example using fetch:
    fetch('https://example.com/api/internships', {
      method: 'POST',
      body: JSON.stringify({ searchText }), // Modify this according to your data structure
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Handle the response
        if (response.ok) {
          console.log('Internship added to the database successfully');
        } else {
          throw new Error('Failed to add the internship to the database');
        }
      })
      .catch((error) => {
        console.error(error);
        setValidationMessage('An error occurred while adding the internship.');
      });
  };

  const OptionsPanel = () => (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <Card style={{ height: '10vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
        <CardContent>
          <Typography variant="h5" component="h4">
            Benefits
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
          <div style={{ marginTop: '10px' }}>
            <button onClick={handleValidation}>Add Internship</button>
            {validationMessage && (
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                {validationMessage}
              </Typography>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '75px', width: '43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu"></IconButton>
              <Typography variant="h7" component="h6">
                Benefits
              </Typography>
              {isChecked && <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />}
            </div>
            <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
              <IconButton edge="start" color="black" aria-label="back">
                <ArrowRightIcon />
              </IconButton>
            </Link>
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

const SixthCardComponent = ({
  title,
  description,
  location,
  category,
  categoryDescription,
  linkTo,
}) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [options, setOptions] = useState(['Intro Videos.mp4']);
  const [validationMessage, setValidationMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen((prevState) => !prevState); // Toggle the value of isFieldOpen
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

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleValidation = () => {
    // Perform field validation
    if (options.length === 0) {
      setValidationMessage('Please add at least one file.');
    } else {
      // Add the internship object to the database
      const internship = {
        title,
        description,
        location,
        category,
        categoryDescription,
        options,
      };
      axios.post('/api/internships', internship)
        .then(response => {
          // Handle success response
          setValidationMessage('Success! Field is valid.');
        })
        .catch(error => {
          // Handle error response
          if (error.response) {
            if (error.response.status === 400) {
              setValidationMessage('Bad request. Please check your input.');
            } else if (error.response.status === 401) {
              setValidationMessage('Unauthorized. Please authenticate.');
            } else if (error.response.status === 404) {
              setValidationMessage('Endpoint not found.');
            } else {
              setValidationMessage('An error occurred. Please try again later.');
            }
          } else {
            setValidationMessage('Network error. Please check your internet connection.');
          }
          console.error('Error adding internship:', error);
        });
    }
  };

  const OptionsPanel = () => (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <Card
        style={{
          height: '10vw',
          width: '40vw',
          margin: '10px',
          borderRadius: '10px',
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h4">
            Intro Videos
          </Typography>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              style={{
                backgroundColor: 'transparent',
                border: '1px dashed grey',
                color: 'purple',
                width: '43vw',
              }}
              onClick={handleButtonClick}
            >
              Drag and Drop Files <CloudUploadIcon />
            </Button>
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              multiple
              onChange={(event) =>
                handleDrop({ dataTransfer: { files: event.target.files } })
              }
            />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {options.map((option, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '10px',
                  marginBottom: '10px',
                }}
              >
                <button
                  style={{
                    width: '10vw',
                    backgroundColor: '#f1f1f1',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    position: 'relative',
                    color: 'purple',
                  }}
                >
                  {option}
                  <ClearIcon
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      cursor: 'pointer',
                      width: '20px',
                    }}
                    onClick={() => handleDeleteOption(index)}
                  />
                </button>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '10px' }}>
            <Button variant="contained" color="primary" onClick={handleValidation}>
              Validate Field
            </Button>
            {validationMessage && (
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                {validationMessage}
              </Typography>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div
      className="card-wrapper"
      style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}
    >
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card
          style={{
            height: '75px',
            width: '43vw',
            cursor: 'pointer',
            margin: '10px',
            borderRadius: '10px',
          }}
        >
          <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu"></IconButton>
              <Typography variant="h7" component="h6">
                Intro Videos
              </Typography>
              {isChecked && <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />}
            </div>
            <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
              <IconButton edge="start" color="black" aria-label="back">
                <ArrowRightIcon />
              </IconButton>
            </Link>
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ display: 'flex', position: 'relative', flexGrow: 1 }}>
          <OptionsPanel />
        </div>
      )}
    </div>
  );
};

const SeventhCardComponent = ({ title, description, location, category, categoryDescription, linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen(prevState => !prevState);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    // Perform validation here
    if (event.target.value.trim() === '') {
      setErrorMessage('Name field cannot be empty.');
    } else {
      setErrorMessage('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Perform validation here
    // Add email validation logic as per your requirements
    if (event.target.value.trim() === '') {
      setErrorMessage('Email field cannot be empty.');
    } else {
      setErrorMessage('');
    }
  };

  const handleLinkedinUrlChange = (event) => {
    setLinkedinUrl(event.target.value);
    // Perform validation here
    // Add LinkedIn URL validation logic as per your requirements
    if (event.target.value.trim() === '') {
      setErrorMessage('LinkedIn URL field cannot be empty.');
    } else {
      setErrorMessage('');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform additional validation if needed
    if (name.trim() === '') {
      setErrorMessage('Name field cannot be empty.');
      return;
    }
    if (email.trim() === '') {
      setErrorMessage('Email field cannot be empty.');
      return;
    }
    if (linkedinUrl.trim() === '') {
      setErrorMessage('LinkedIn URL field cannot be empty.');
      return;
    }

    // Create the internship object
    const internship = {
      title,
      description,
      location,
      category,
      categoryDescription,
      name,
      email,
      linkedinUrl
    };

    // Send the internship object to the backend API
    axios.post('/api/internships', internship)
      .then(response => {
        // Handle successful response from the backend
        console.log('Internship added to the database:', response.data);
        // TODO: Perform any additional actions after successful validation and database storage
      })
      .catch(error => {
        // Handle error response from the backend
        console.error('Error adding internship:', error);
        // TODO: Handle the error gracefully and show an appropriate message to the user
      });
  };

  const OptionsPanel = () => (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <Card style={{ height: '15vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
        <CardContent>
          <Typography variant="h5" component="h4">
            Mentor Details
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input type="file" style={{ marginRight: '10px' }} />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="url"
              placeholder="LinkedIn URL"
              value={linkedinUrl}
              onChange={handleLinkedinUrlChange}
              style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }}
            />
          </div>
          {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
          <button onClick={handleFormSubmit}>Submit</button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '75px', width:'43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="black" aria-label="menu">
                
              </IconButton>
              <Typography variant="h7" component="h6">
                Mentor Details
              </Typography>
              {isChecked && (
                <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />
              )}
            </div>
            <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
              <IconButton edge="start" color="black" aria-label="back">
                <ArrowRightIcon />
              </IconButton>
            </Link>
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
const EighthCardComponent = ({ title, description, location, category, categoryDescription, linkTo }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState(['Fullstack Developer', 'Backend Developer']);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen(prevState => !prevState);

    if (!errorMessage) {
      const internship = {
        title,
        description,
        location,
        category,
        categoryDescription,
        linkTo
      };

      // Make a request to the backend API or database to save the internship object
      axios.post('/api/internships', internship)
        .then(response => {
          // Handle the response if needed
          console.log('Internship object saved successfully:', response.data);
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Error saving internship object:', error);
        });
    }
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Perform validation here
    if (event.target.value.trim() === '') {
      setErrorMessage('Search text cannot be empty.');
    } else {
      setErrorMessage('');
    }
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const OptionsPanel = () => (
    <div style={{ position: 'relative', minWidth: '200px' }}>
      <Card style={{ height: '10vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
        <CardContent>
          <Typography variant="h5" component="h4">
            Recommended Roles
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
          {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {options.map((option, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                <button style={{ width: '10vw', backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px', position: 'relative', color: 'purple' }}>
                  {option}
                  <ClearIcon
                    style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer', width: '20px' }}
                    onClick={() => handleDeleteOption(index)}
                  />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="card-wrapper" style={{ display: 'flex', alignItems: 'stretch', flexGrow: 1 }}>
      <div style={{ display: 'flex', alignItems: 'top-left' }}>
        <MenuIcon />
      </div>
      <div className="card" style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '75px', width:'43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                edge="start"
                color="black"
                aria-label="menu"
              />
              <Typography variant="h7" component="h6">
                Recommended Roles
              </Typography>
              {isChecked && (
                <CheckCircleIcon style={{ marginLeft: '10px', color:'purple' }} />
              )}
            </div>
            <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
              <IconButton
                edge="start"
                color="black"
                aria-label="back"
              >
                <ArrowRightIcon />
              </IconButton>
            </Link>
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
  

const NinethCardComponent = ({ linkTo, onNinethCardComponentClick }) => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(true);
    setIsFieldOpen(prevState => !prevState);
    onNinethCardComponentClick();
  };

  const AddUrlPanel = () => {
    const [url, setUrl] = useState('');

    const handleUrlChange = (event) => {
      setUrl(event.target.value);
    }

    const handleAddClick = () => {
      
    }

    return (
      <div style={{ position: 'relative', minWidth: '200px' }}>
        <Card style={{ height: '10vw', width: '40vw', margin: '10px', borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="h4">
              Web Links and Resources
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <AddIcon style={{ marginRight: '10px' }} />
              <input type="text" value={url} onChange={handleUrlChange} placeholder="Enter URL..." style={{ flexGrow: '1', border: 'none', borderBottom: '1px solid #ccc', padding: '5px' }} />
            </div>
            <div style={{ display: 'flex' }}>
              <button onClick={handleAddClick} style={{ backgroundColor: '#f1f1f1', border: 'none', padding: '10px', borderRadius: '5px' }}>Add</button>
              <CloudUploadIcon onClick={handleAddClick} />
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
        <Card style={{ height: '75px', width:'43vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                edge="start"
                color="black"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h7" component="h6">
                Web Links & Resources
              </Typography>
              {isChecked && (
                <CheckCircleIcon style={{ marginLeft: '10px', color: 'purple' }} />
              )}
            </div>
            <Link to={linkTo} onClick={handleLinkClick} style={{ position: 'absolute', right: 0 }}>
              <IconButton
                edge="start"
                color="black"
                aria-label="back"
              >
                <ArrowRightIcon />
              </IconButton>
            </Link>
          </CardContent>
        </Card>
      </div>
      {isFieldOpen && (
        <div className="field" style={{ position: 'relative', flexGrow: 1 }}>
          <AddUrlPanel />
        </div>
      )}
    </div>
  );
}

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
        style={{ backgroundColor: 'transparent', border: '1px dashed grey', color: 'purple', width: '45vw' }}
      >
        Add More
      </Button>
    </Link>
  );
};

function TopCardComponent({ isNinethCardComponentClicked }) {
  return (
    <Card style={{ height: '75px', width: '85vw', position: 'relative' }}>
      <CardContent style={{ textAlign: 'center' }}>
        <Link to="/">
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
        <Link to="/AddMore">
        <Button
          variant="contained"
          color="primary"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: isNinethCardComponentClicked ? 'purple' : 'grey',
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


function StatusBar({ isNinethCardComponentClicked }) {
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleLinkClick = () => {
    setIsLinkClicked(true);
    // Call any other functions you need to handle the link click here
  };

  return (
    <Card style={{ height: '75px', width: '85vw', backgroundColor: '#f0f0f0', position: 'relative' }}>
      <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        {isNinethCardComponentClicked ? <CheckCircleOutlineIcon style={{ color: 'purple', marginRight: '5px' }} /> : <DataUsageIcon style={{ color: 'gray', marginRight: '5px' }} />}
          <Typography style={{ textAlign: 'left', color: 'black' }} variant="body1" component="p">
            Internship Description
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DataUsageIcon style={{ color: 'lightgray', marginRight: '5px' }} />
          <Typography style={{ textAlign: 'right', color: 'lightgray' }} variant="body1" component="p">
            Additional Details
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DataUsageIcon style={{ color: 'lightgray', marginRight: '5px' }} />
          <Typography style={{ textAlign: 'right', color: 'lightgray' }} variant="body1" component="p">
            Review & Submit
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DataUsageIcon style={{ color: 'lightgray', marginRight: '5px' }} />
          <Typography style={{ textAlign: 'right', color: 'lightgray' }} variant="body1" component="p">
            Review & Submit
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}


function NewInternship() {
  // Rest of the code
  const [isNinethCardComponentClicked, setIsNinethCardComponentClicked] = useState(false);

  const handleNinethCardComponentClick = () => {
    setIsNinethCardComponentClicked(true);
  };
  return (
    // JSX content using TopCardComponent and CardComponent
    <div>
      <TopCardComponent isNinethCardComponentClicked={isNinethCardComponentClicked} />
      <StatusBar isNinethCardComponentClicked={isNinethCardComponentClicked} />
      <SecondCardComponent/>
      <ThirdCardComponent/>
      <FourthCardComponent/>
      <FifthCardComponent/>
      <SixthCardComponent/>
      <SeventhCardComponent/>
      <EighthCardComponent/>
      <NinethCardComponent onNinethCardComponentClick={handleNinethCardComponentClick}/>
      <AddMoreButton />
      
    </div>
      
  );
}

export default NewInternship;