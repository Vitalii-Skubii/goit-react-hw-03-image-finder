import axios from 'axios';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 19947316-dacc226b3a8c6b348c54c2ce4';
const apiKey = '19947316-dacc226b3a8c6b348c54c2ce4';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  console.log(searchQuery);
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};

export default fetchImages;
