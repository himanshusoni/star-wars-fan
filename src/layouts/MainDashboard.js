import React from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {GridList, GridTile} from 'material-ui/GridList';
import helper from '../utils/helpers'

const lightMuiTheme = getMuiTheme(lightBaseTheme)

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
}

class MainDashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
  }
  componentDidMount(){
    helper.getApis()
      .then(((d) => {
        let data = d.data
        this.setState({
          data
        })
      }).bind(this))
  }
  render(){
    const data = this.state.data

    return(
      <MuiThemeProvider muiTheme={lightMuiTheme}>
      <div style={styles.root}>
        <h1>MainDashboard</h1>
        <GridList
          cellHeight={200}
          style={styles.gridList}
        >
          {Object.keys(data).map((item) => (
            <GridTile
              key={item}
              title={item}
            >
            </GridTile>
          ))}
        </GridList>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default MainDashboard
