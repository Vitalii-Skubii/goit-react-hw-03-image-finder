import { Component } from 'react';
import imagesAPI from '../utils/images-API';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import './styles.css';
import Button from './Button';
import Modal from './Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

// import styles from './App.module.css';
class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    noResult: false,
    largeImgUrl: '',
  };
  // async componentDidMount() {
  //   const response = await axios.get(
  //     'https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12',
  //   );
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPics();
    }
    // if (this.state.images.length === 0) {
    //   this.setState({ noResult: true });
    // }
  }

  handleSearchPics = search => {
    this.setState({
      searchQuery: search,
      currentPage: 1,
      images: [],
      error: null,
    });
  };
  fetchPics = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };
    this.setState({ isLoading: true });
    return imagesAPI(options)
      .then(hits => {
        if (hits.length > 0) {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            currentPage: prevState.currentPage + 1,
          }));
        } else {
          this.setState({ noResult: true });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        this.setState({ isLoading: false });
      });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  openModal = url => {
    this.setState({ largeImgUrl: url });
    this.toggleModal();
  };
  render() {
    const {
      images,
      isLoading,
      error,
      showModal,
      noResult,
      largeImgUrl,
    } = this.state;
    const shouldRenderButton = images.length > 0 && !isLoading;
    // const visibleContact = this.getFilteredContacts();
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchPics} />
        <div className="Container">
          <ImageGallery images={images} onImgClick={this.openModal} />

          {noResult && <h2 className="Message">Sorry, no results</h2>}

          {error && <h2 className="Message">Sorry, something went wrong!!!</h2>}
          {shouldRenderButton && <Button onClick={this.fetchPics} />}
          {isLoading && (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          )}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImgUrl} width="800" height="600" alt="pic" />
            </Modal>
          )}
        </div>
      </div>
      // <div className={styles.wrapper}>
      //   <h2 className={styles.title}>Phonebook</h2>
      //   <ContactForm
      //     onAdd={this.contactsAddHandler}
      //     uniqueCheck={this.checkContactUnique}
      //   />
      //   <h2 className={styles.title}>Contact List</h2>
      //   <ContactFilter filter={filter} onChange={this.filterContactFilter} />
      //   <ContactList
      //     contacts={visibleContact}
      //     onRemove={this.handleRemoveContact}
      //   />
      // </div>
    );
  }
}

export default App;
