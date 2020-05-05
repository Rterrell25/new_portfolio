import React from "react"
import "@brainhubeu/react-carousel/lib/style.css"
import Carousel from "@brainhubeu/react-carousel"
import { makeStyles } from "@material-ui/core/styles"

// MUI Icons
import StorageIcon from "@material-ui/icons/Storage"
import CodeIcon from "@material-ui/icons/Code"
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly"
import Typography from "@material-ui/core/Typography"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

const useStyles = makeStyles((theme) => ({
  item: {
    height: 190,
    width: 355,
    marginRight: 10,
    marginLeft: 10,
    "@media (max-width: 1024px)": {
      width: 355,
    },
    "@media (max-width: 800px)": {
      width: 600,
    },
  },
}))

const Test = () => {
  const classes = useStyles()

  return (
    <div style={{ textAlign: "center" }}>
      <Carousel
        arrowLeft={
          <ArrowBackIosIcon
            style={{ height: 50, width: 50, cursor: "pointer" }}
          />
        }
        arrowRight={
          <ArrowForwardIosIcon
            style={{ height: 50, width: 50, cursor: "pointer" }}
          />
        }
        addArrowClickHandler
        slidesPerPage={3}
        slidesPerScroll={1}
        infinite
        clickToChange
        centered
        breakpoints={{
          1024: {
            // these props will be applied when screen width is less than 1000px
            slidesPerPage: 2,
            slidesPerScroll: 1,
            clickToChange: false,
            centered: false,
          },
          800: {
            slidesPerPage: 1,
            slidesPerScroll: 1,
            clickToChange: false,
            centered: true,
          },
        }}
      >
        <div className={classes.item}>
          <MobileFriendlyIcon style={{ height: 50, width: 50 }} />
          <Typography variant='h6' style={{ marginBottom: "5px" }}>
            Mobile-Friendly
          </Typography>
          <Typography variant='body2'>
            Maintaining a mobile first mindset, while creating a responsive
            design, makes your website accessible to all users, regardless of
            their device.
          </Typography>
        </div>

        <div className={classes.item}>
          <CodeIcon style={{ height: 50, width: 50 }} />
          <Typography variant='h6' style={{ marginBottom: "5px" }}>
            Design + Development
          </Typography>
          <Typography variant='body2'>
            Building out the visual components of a website using HTML5, CSS3,
            Material-UI, Javascript, and ReactJS. Using clean, modern designs -
            optimized for performance.
          </Typography>
        </div>
        <div className={classes.item}>
          <StorageIcon style={{ height: 50, width: 50 }} />
          <Typography
            variant='h6'
            style={{
              marginBottom: "5px",
            }}
          >
            Back-End Development
          </Typography>
          <Typography variant='body2'>
            Creating powerful back ends with fleshed out data models using
            technologies, such as AWS, NodeJS, Google Cloud(Firestore), Ruby on
            Rails, PostgreSQL, GraphQL
          </Typography>{" "}
        </div>
      </Carousel>
    </div>
  )
}
export default Test