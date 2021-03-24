// import { Component } from 'react';
// import { v4 as uuid } from 'uuid';
// import styles from './ContactForm.module.css';
// const initionalState = {
//   name: '',
//   number: '',
// };

import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onImgClick }) => {
  const handleOnImgClick = () => {
    onImgClick(largeImageURL);
  };
  return (
    <li className="ImageGalleryItem" key={id} onClick={handleOnImgClick}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};
// class ContactForm extends Component {
//   state = initionalState;
//   changeFormHandler = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   submitFormHandler = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     const { onAdd } = this.props;

//     const isValidForm = this.validateForm();
//     if (!isValidForm) return;

//     onAdd({ id: uuid(), name, number });
//     this.resetForm();
//   };

//   validateForm = () => {
//     const { name, number } = this.state;
//     const { uniqueCheck } = this.props;
//     if (!name || !number) {
//       alert('Fill in all fields');
//       return false;
//     }
//     return uniqueCheck(name);
//   };

//   resetForm = () => this.setState(initionalState);

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={styles.form} onSubmit={this.submitFormHandler}>
//         <input
//           className={styles.input}
//           type="text"
//           name="name"
//           placeholder="Enter name"
//           value={name}
//           onChange={this.changeFormHandler}
//         />
//         <input
//           className={styles.input}
//           type="tel"
//           name="number"
//           placeholder="Enter phone number"
//           value={number}
//           onChange={this.changeFormHandler}
//         />
//         <button className={styles.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImgClick: PropTypes.func,
};

export default ImageGalleryItem;
