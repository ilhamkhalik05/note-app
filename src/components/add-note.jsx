import React from 'react';
import { NOTE_TITLE_MAX_LENGTH } from '../utils/const';

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onResetHandler = this.onResetHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const { value } = event.target;

    if (value.length <= NOTE_TITLE_MAX_LENGTH) {
      this.setState({
        title: value,
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote({ title: this.state.title, body: this.state.body });
    this.onResetHandler();
  }

  onResetHandler() {
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="add-note_form">
        <h1>Tambah Note</h1>
        <div className="input-group">
          <label htmlFor="title">Judul</label>
          <input
            id="title"
            type="text"
            placeholder="Ketik judul disini"
            name="title"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <p className="add-note_max_length_message">
            {NOTE_TITLE_MAX_LENGTH - this.state.title.length} karakter tersisa
          </p>
        </div>
        <div className="input-group">
          <label htmlFor="body">Isi</label>
          <textarea
            id="body"
            name="body"
            cols="30"
            rows="10"
            placeholder="Ketik isi catatan disini"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          ></textarea>
        </div>
        <button type="submit" className="add-note_submit">
          Tambah Sekarang
        </button>
      </form>
    );
  }
}

export default AddNote;
