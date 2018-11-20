import React, { Component } from "react";

import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false
    };
  }

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <React.Fragment>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
      </React.Fragment>
    );
  }
}

export default Navigation;
