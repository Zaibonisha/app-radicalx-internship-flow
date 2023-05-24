import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//import IconButton from '@mui/material/IconButton';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import Button from '@mui/material/Button';
//import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
//import Category from "./pages/cardPages/Category";

const SecondCardComponent = ({ title, description, location, category, categoryDescription, linkTo  }) => {
  return (
    <Link to='/.Category' style={{ textDecoration: 'none' }}>
      <Card style={{ height: '75px', width: '85vw', cursor: 'pointer', margin: '10px', borderRadius: '10px' }}>
        <CardContent>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {description}
          </Typography>
          <Typography variant="body2" component="p">
            {location}
          </Typography>
          <Typography variant="caption" component="p">
            Category: {category}
          </Typography>
          <Typography variant="caption" component="p">
            {categoryDescription}
          
          </Typography>
          
        </CardContent>
      </Card>
    </Link>
    
  );
}




export default SecondCardComponent;