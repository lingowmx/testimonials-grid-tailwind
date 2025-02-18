import PropTypes from "prop-types"

export const Layout = ({image, mainName, isGraduate, testimonialOne, testimonialTwo}) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <div>
          <h3>{mainName}</h3>
          <p>{isGraduate}</p>
        </div>
        <section>
          <div>{testimonialOne}</div>
          <div>{testimonialTwo}</div>
        </section>
      </div>
    </div>
  )
}

Layout.propTypes = {
  image:PropTypes.node.isRequired,
  mainName:PropTypes.string.isRequired,
  isGraduate:PropTypes.string.isRequired,
  testimonialOne:PropTypes.string.isRequired,
  testimonialTwo:PropTypes.string.isRequired
}
