import React from 'react'
import PorkersData from '../porkers_data'
import Pig from './Pig'
import SortOptions from './SortOptions'

class ViewContainer extends React.Component {
  state = {
    filter: false,
    sort: null,
    pigs: PorkersData
  }

  renderPigs = (pigsArr) => {
    if (this.state.filter === false && this.state.sort === null) {
      //both are false
      return pigsArr.map((pigObj,id) => {
        return <Pig props={pigObj} key={id} />
      })
    } else if (this.state.filter) {
      //filter is true
      if (this.state.sort) {
        //add weight
        //sorted is true
        if (this.state.sort === "name") {
          let newArr = [...pigsArr]
          let filteredArr = newArr.filter(pigObj => pigObj.greased)
          let filteredAndSortedArr = filteredArr.sort((a, b) => {
            return (a.name).localeCompare(b.name)
          })
          //return something here
          return filteredAndSortedArr.map((pigObj,id) => {
            return <Pig props={pigObj} key={id} />
          })
        } else {
          let newArr = [...pigsArr]
          let filteredArr = newArr.filter(pigObj => pigObj.greased)
          let filteredAndSortedArr = filteredArr.sort((a, b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
          //return something here
          return filteredAndSortedArr.map((pigObj,id) => {
            return <Pig props={pigObj} key={id} />
          })
        }
      } else {
        //sorted is false
        let newArr = [...pigsArr]
        let filteredArr = newArr.filter(pigObj => pigObj.greased)
        //return something here
        return filteredArr.map((pigObj,id) => {
          return <Pig props={pigObj} key={id} />
        })
      }
    } else {
      //add weight
      //filter is false (sort is true)
      if (this.state.sort) {
        if (this.state.sort === "name") {
          let newArr = [...pigsArr]
          let sortedArr = newArr.sort((a, b) => {
            return (a.name).localeCompare(b.name)
          })
          //return something here
          return sortedArr.map((pigObj,id) => {
            return <Pig props={pigObj} key={id} />
          })
        } else {
          let newArr = [...pigsArr]
          let sortedArr = newArr.sort((a, b) => {
            return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
          })
          //return something here
          return sortedArr.map((pigObj,id) => {
            return <Pig props={pigObj} key={id} />
          })
        }
      }
    }

  }

  sortName = (event) => {
    if (this.state.sort === 'name') {
      this.setState({
        sort: null
      }, () => {console.log(this.state.sort)})
    } else {
      this.setState({
        sort: 'name'
      }, () => {console.log(this.state.sort)})
    }
  }

  sortWeight = (event) => {
    if (this.state.sort === 'weight') {
      this.setState({
        sort: null
      }, () => {console.log(this.state.sort)})
    } else {
      this.setState({
        sort: 'weight'
      }, () => {console.log(this.state.sort)})
    }
  }

  filterGreased = (event) => {
    if (this.state.filter === false) {
      this.setState({
        filter: true
      }, () => {console.log(this.state.filter)})
    } else {
      this.setState({
        filter: false
      }, () => {console.log(this.state.filter)})
    }
  }

  render () {
    return(
      <div>
        <SortOptions sortName={this.sortName} sortWeight={this.sortWeight} filterGreased={this.filterGreased}  />
        <div className="ui link cards">
            {this.renderPigs(this.state.pigs)}
        </div>
      </div>
    )
  }
}

export default ViewContainer;
