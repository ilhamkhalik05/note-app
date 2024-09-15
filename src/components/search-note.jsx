import React from 'react';

class SearchNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onKeywordChangeHandler(event) {
    this.setState({
      keyword: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.searchNote(this.state.keyword);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="note-search_form">
        <input
          className="note-search_input"
          type="search"
          name="keyword"
          id="search"
          autoComplete="off"
          placeholder="Cari note disini..."
          value={this.state.keyword}
          onChange={this.onKeywordChangeHandler}
        />
        <button type="submit" className="note-search_submit">
          Cari
        </button>
      </form>
    );
  }
}

export default SearchNote;
