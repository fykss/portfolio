import React, {Component} from 'react';
import './eventsData.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as eventsDataActions from "../../store/eventsData/actions";
export default class eventsData extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-events-data">Hello! component eventsData</div>;
    }
  }
// export default connect(
//     ({ eventsData }) => ({ ...eventsData }),
//     dispatch => bindActionCreators({ ...eventsDataActions }, dispatch)
//   )( eventsData );