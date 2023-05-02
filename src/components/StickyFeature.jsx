import { useState, useEffect } from "react"
import withStyles from "react-jss"

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  sticky: {
    position: "sticky",
    top: 0,
    width: "100%",
  },
  figure: {
    position: "relative",
    width: "100%",
    height: "100vh",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  captionContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(90.28deg, rgba(90, 90, 90, 0.83) 1.05%, rgba(90, 90, 90, 0) 97.48%)",
  },
  caption: {
    paddingLeft: "3rem",
    fontFamily: "VogueAvantGarde",
    fontWeight: 700,
    fontSize: "32px",
    color: "white",
    transition: "opacity 0.6s ease-out",
  },
  triggers: {
    width: "100%",
    zIndex: 2,
    "& > :first-child": {
      marginTop: "50vh",
    },
  },
  trigger: {
    width: "100%",
    height: "200px",
    // background: "green",
    background: "transparent",
    margin: "150vh auto",
  },
}

const IMG_SRC =
  "https://images.unsplash.com/photo-1682587177517-80523418eef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"

const StickyFeature = ({ classes, id }) => {
  // if (!id) return ""

  const [state, setState] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const trigger = document.getElementById(`#interactive-sticky-trigger-${id}`)

    const detectIntersection = (entries) => {
      for (let e of entries) {
        if (e.isIntersecting) {
          setState(true)
        } else {
          setState(false)
        }
      }
    }

    const options = {
      threshold: 0.25,
    }
    const observer = new IntersectionObserver(detectIntersection, options)
    observer.observe(trigger)
  }, [])

  useEffect(() => {
    if (state) setOpacity(1)
    else setOpacity(0)
  }, [state])

  return (
    <article className={classes.container}>
      <div className={classes.sticky}>
        <figure className={classes.figure}>
          <img
            className={classes.img}
            src={IMG_SRC}
            alt="Placeholder alt text"
          />
          <div className={classes.captionContainer}>
            <figcaption
              className={classes.caption}
              style={{ opacity: opacity }}>
              When we worked on the Chanel show together, he was incredibly
              generous in what he lent, but he was completely disinterested in
              the exhibition itself!
            </figcaption>
          </div>
        </figure>
      </div>
      <div className={classes.triggers} aria-hidden="true">
        <div
          className={classes.trigger}
          id={`#interactive-sticky-trigger-${id}`}
        />
      </div>
    </article>
  )
}

export default withStyles(styles)(StickyFeature)
