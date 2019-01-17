import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import FormInlineMessage from "./FormInlineMessage";

class GameForm extends Component {
  state = {
    data: {
      name: "",
      description: "",
      price: 0,
      duration: 0,
      players: "",
      featured: false,
      publisher: 0,
      thumbnail: ""
    },
    errors: {}
  };

  validate(data) {
    const errors = {};

    if (!data.name) errors.name = "This field can't be blank";
    if (!data.players) errors.players = "This field can't be blank";
    if (!data.publisher) errors.publisher = "This field can't be blank";
    if (!data.thumbnail) errors.thumbnail = "This field can't be blank";
    if (data.price <= 0) errors.price = "Can't be ZERO";
    if (data.duration <= 0) errors.duration = "Too Short";

    return errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
       this.props.submit(this.state.data)
    }
  };

  handleStringChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  handleNumberChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10)
      }
    });
  };

  handleCheckboxChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.checked }
    });
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className={errors.name ? "field error" : "field"}>
              <label
                htmlFor="name"
                style={{
                  marginTop: "12pt",
                  marginBottom: "12pt",
                  fontSize: "14pt"
                }}
              >
                Game Title
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Title"
                value={data.name}
                onChange={this.handleStringChange}
              />
              <FormInlineMessage content={errors.name} type="error" />
            </div>

            <div className={errors.description ? "field error" : "field"}>
              <label
                htmlFor="description"
                style={{
                  marginTop: "12pt",
                  marginBottom: "12pt",
                  fontSize: "14pt"
                }}
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                value={data.description}
                onChange={this.handleStringChange}
              />
              <FormInlineMessage content={errors.description} type="error" />
            </div>
          </div>
          <div className="four wide column">
            <ReactImageFallback
              src={data.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
              style={{
                marginTop: "45pt"
              }}
            />

            {/* {data.thumbnail ? (
              <img
                src={data.thumbnail}
                alt="thumbnail"
                className="ui image"
              />
            ) : (
              <img
                src="http://via.placeholder.com/250x250"
                alt="thumbnail"
                className="ui image"
                style={{
                  marginTop: "42pt"
                }}
              />
            )} */}
          </div>
        </div>

        <div className={errors.thumbnail ? "field error" : "field"}>
          <label
            htmlFor="thubmnail"
            style={{
              marginTop: "12pt",
              marginBottom: "12pt",
              fontSize: "14pt"
            }}
          >
            Thumbnail
          </label>
          <input
            type="text"
            id="thubmnail"
            name="thubmnail"
            placeholder="Image URL"
            value={data.thubmnail}
            onChange={this.handleStringChange}
          />
          <FormInlineMessage content={errors.thumbnail} type="error" />
        </div>

        <div className="three fields">
          <div className={errors.price ? "field error" : "field"}>
            <label
              htmlFor="price"
              style={{
                marginTop: "12pt",
                marginBottom: "12pt",
                fontSize: "14pt"
              }}
            >
              Price (cents)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={data.price}
              onChange={this.handleNumberChange}
            />
            <FormInlineMessage content={errors.price} type="error" />
          </div>

          <div className={errors.duration ? "field error" : "field"}>
            <label
              htmlFor="duration"
              style={{
                marginTop: "12pt",
                marginBottom: "12pt",
                fontSize: "14pt"
              }}
            >
              Duration (minutes)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={data.duration}
              onChange={this.handleNumberChange}
            />
            <FormInlineMessage content={errors.duration} type="error" />
          </div>

          <div className={errors.players ? "field error" : "field"}>
            <label
              htmlFor="players"
              style={{
                marginTop: "12pt",
                marginBottom: "12pt",
                fontSize: "14pt"
              }}
            >
              Players
            </label>
            <input
              type="text"
              id="players"
              name="players"
              value={data.players}
              onChange={this.handleStringChange}
            />
            <FormInlineMessage content={errors.players} type="error" />
          </div>
        </div>

        <div className="inline field">
          <input
            type="checkbox"
            id="featured"
            name="featured"
            checked={data.featured}
            onChange={this.handleCheckboxChange}
          />

          <label htmlFor="featured">Featured?</label>
        </div>
        <div className={errors.publisher ? "field error" : "field"}>
          <label
            htmlFor="publishers"
            style={{
              marginTop: "22pt"
            }}
          >
            Publishers
            <select
              style={{
                marginTop: "12pt"
              }}
              name="publisher"
              value={data.publisher}
              onChange={this.handleNumberChange}
            >
              <option value="0">Choose Publisher</option>
              {this.props.publishers.map(publisher => (
                <option value={publisher._id} key={publisher._id}>
                  {publisher.name}
                </option>
              ))}
            </select>
            <FormInlineMessage content={errors.publisher} type="error" />
          </label>
        </div>

        <div className="ui fluid buttons">
          <button className="ui primary button" type="submit">
            Create
          </button>
          <div className="or" />
          <div className="ui button" onClick={this.props.cancel}>
            Cancel
          </div>
        </div>
      </form>
    );
  }
}

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  cancel: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

GameForm.defaultProps = {
  publishers: []
};

export default GameForm;
