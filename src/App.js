import withStyles from "react-jss"
import globalStyles from "./styles/globalStyles"
import StickyFeature from "./components/StickyFeature"

const styles = {
  ...globalStyles,
  app: {
    margin: 0,
    padding: "80px 0",
  },
}

const App = ({ classes }) => {
  return (
    <main className={classes.app}>
      <StickyFeature id={1} />
    </main>
  )
}

export default withStyles(styles)(App)
