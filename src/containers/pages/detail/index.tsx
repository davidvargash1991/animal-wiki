import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "store";
import { getGallery } from "store/photos/actions";
import Detail from "components/pages/detail";

const mapStateToProps = (state: IAppState) => ({
  Animals: state.Animals,
  Gallery: state.Gallery,
});

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
  return {
    onGetPhotos: (name: string) => dispatch(getGallery(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
