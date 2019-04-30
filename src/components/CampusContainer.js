import React, { Component } from "react";
import CampusMap from "./pages/CampusMap";
import Dorm from "./pages/Dorm";
// import Gym from "./pages/Gym";
// import FratHouse from "./pages/FratHouse";
// import Library from "./pages/Library";
// import Cafeteria from "./pages/Cafeteria";

class CampusContainer extends Component {
  state = {
    currentPage: "CampusMap"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case "CampusMap":
        return <CampusMap />;
      case "Dorm":
        return <Dorm />;
      //   case "Gym":
      //     return <Gym />;
      //   case "FratHouse":
      //     return <FratHouse />;
      //   case "Library":
      //     return <Library />;
      //   case "Cafeteria":
      //     return <Cafeteria />;

      default:
        return <CampusMap />;
    }
  };
  render() {
    return (
      <div>
        <CampusMap handlePageChange={this.handlePageChange} />
        {/* <NavTabs
          currentPage={this.state.currentPage}
          
        /> */}
        {this.renderPage()}
      </div>
    );
  }
}

export default CampusContainer;
