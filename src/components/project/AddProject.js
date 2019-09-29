import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../action/projectActions";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      startDate: "",
      endDate: "",
      errors: {}
    };
    // this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  onSubmit = e => {
    e.preventDefault();
    const project = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };

    this.props.createProject(project, this.props.history);
  };

  render() {
    const { errors } = this.state;
    let validInput = "form-control form-control-lg";
    let invalidInput = "form-control form-control-lg is-invalid";
    let errorText = e => <div className="invalid-feedback">{e}</div>;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">
                Create / Edit Project form
              </h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={errors.projectName ? invalidInput : validInput}
                    // className="form-control form-control-lg "
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                  {errors.projectName ? errorText(errors.projectName) : null}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={
                      errors.projectIdentifier ? invalidInput : validInput
                    }
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={this.onChange}
                  />
                  {errors.projectIdentifier
                    ? errorText(errors.projectIdentifier)
                    : null}
                </div>
                <div className="form-group">
                  <textarea
                    className={errors.description ? invalidInput : validInput}
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.description ? errorText(errors.description) : null}
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className={errors.startDate ? invalidInput : validInput}
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                  {errors.startDate ? errorText(errors.startDate) : null}
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className={errors.endDate ? invalidInput : validInput}
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.onChange}
                  />
                  {errors.endDate ? errorText(errors.endDate) : null}
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { createProject }
)(AddProject);
