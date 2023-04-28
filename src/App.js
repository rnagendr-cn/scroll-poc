import withStyles from "react-jss"
import globalStyles from "./styles/globalStyles"

const styles = {
  ...globalStyles,
  app: {
    margin: 0,
    padding: 0,
  },
}

const App = ({ classes }) => {
  return (
    <main className={classes.app}>
      <h1>DSL Editorial Data Viz template</h1>
    </main>
  )
}

export default withStyles(styles)(App)
