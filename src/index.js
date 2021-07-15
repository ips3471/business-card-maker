import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import FileUploader from './service/file_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const fileUploader = new FileUploader();
const cardRepository = new CardRepository();
const ImageInput = props => (
  <ImageFileInput {...props} fileUploader={fileUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App 
    authService = {authService} 
    ImageInput={ImageInput} 
    cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

