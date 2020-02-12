import { connect } from 'react-redux';
import ImageUpload from './ImageUpload';
import { addNewImage } from '../../store/actions';

const mapStateToProps = (state) => ({ imagesData: state.imagesData });
const mapDispatchToProps = (dispatch) => ({
  addNewImage: (...props) => dispatch(addNewImage(...props))
});
export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
