import React, { Component } from 'react';
import './App.css';
import Background from './camera.jpg';
import Camera from './camera';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import { Redirect } from 'react-router-dom';

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${Background})`
// };
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent: false
    }
    this.setRedirect = this.setRedirect.bind(this);
  }
  
  
  setRedirect() {
    console.log("clicked");
    console.log(this.state.showComponent);
    this.setState({
      showComponent: true,
    });
  }

  // setRedirect = () => {
  //   console.log("Set redirect");
  //   this.setState({
  //     redirect: true
  //   })
  //   this.renderRedirect();
  // }
  // renderRedirect = () => {
  //   console.log("Render Redirect");
  //   console.log(this.state.redirect);
  //   if (this.state.redirect) {
  //     return <Redirect to='/camera' />
  //   }
  // }
  render() {
    return (
     
        
      
      <div className="bg" >
      {/* <img src = {Background} className="bg" /> */}
      <Button variant="contained" className="upload" onClick={this.setRedirect}  color="default" >
        Upload
        <CloudUploadIcon  />
      </Button>
        {/* <button  className="button" onClick={this.setRedirect}>Capture</button> */}
         {this.state.showComponent ?
           <Camera/> :
           null
        } 
        {/* { this.state.showComponent && (<Camera/>) } */}
        
      </div>
    );
  }
}

export default App;
