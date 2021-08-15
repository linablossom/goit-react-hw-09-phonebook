import React, { Component, Suspense } from "react";
import Routes from "./routes/Routes";
import { connect } from "react-redux";
import Menu from "./components/Menu";
import { getInfo } from "./redux/services/userApiService";
import { getAuthToken } from "./api/api";
import Loading from "./components/Loading";

class App extends Component {
  componentDidMount() {
    if (!!getAuthToken()) {
      this.props.getInfo();
    }
  }

  render() {
    return (
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Menu />
        <Routes />
      </Suspense>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(getInfo()),
});

export default connect(null, mapDispatchToProps)(App);
