var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className='languages'>  
      {languages.map(function(lang) {
        return (
          <li 
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
          >
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All' 
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    return (
      <SelectLanguage 
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage}
      />
    )
  }
  
}

module.exports = Popular