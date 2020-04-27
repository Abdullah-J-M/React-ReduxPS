import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    // Copied course state as we need to keep React state immutable
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course }); // Object shorhand syntax(left == right) as opposed to {course: course}
  };

  handleSubmit = (event) => {
    // need to prevent the default behavior of submit so it does post back (reload the page)
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}
// connect(mapStateToProps, mapDispatchToProps) =>  mapDispatchToProps is an optional parameter
// When we omit it, mapDispatchToProps gets a dispatch prop injected automatically.
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
