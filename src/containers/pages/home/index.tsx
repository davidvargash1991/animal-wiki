import { connect } from "react-redux";
import { IAppState } from "store";
import Home from "components/pages/home";

const mapStateToProps = (state: IAppState) => ({
  Animals: state.Animals,
});

export default connect(mapStateToProps)(Home);
