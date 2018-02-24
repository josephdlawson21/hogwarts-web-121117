
import React from 'react'


class Pig extends React.Component {
  state = {
    extraData: false
  }

  extraData = () => {
    this.setState({
      extraData: !this.state.extraData
    })
  }

  render () {
    console.log(this.props.props);
    return (
      <div className="ui card" onClick={this.extraData}>
        <div >
          <img src={require(`../hog-imgs/${this.props.props.name.toLowerCase().split(" ").join("_")}.jpg`)}/>
        </div>
        <div className="content">
          <div className="header">{this.props.props.name}</div>
          <div className="meta">
            <a>Pig</a>
          </div>
          <div>
            {this.state.extraData ? `Specialty: ${this.props.props.specialty} - ${this.props.props['highest medal achieved']} Medal - ${this.props.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} Refrigerators Heavy` : null}
          </div>
        </div>

      </div>

    )
  }
}

export default Pig
