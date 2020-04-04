import { connect } from "react-redux";
import { IAppState } from "store";
import Search from "components/pages/search";

const mapStateToProps = (state: IAppState) => ({
  Animals: state.Animals,
});

export default connect(mapStateToProps)(Search);
