import PropTypes from "prop-types"

export const Layout = ({ mainName, isGraduate, image, testimonialOne, testimonialTwo, className }) => {
  return (

    <div className={`font-barlowSemiCondensed mb-6 shadow-xl rounded-xl flex flex-col p-9 ${className}`}>
      <div className="flex gap-4 items-center mb-4">
        <img src={image} alt="" className="rounded-full w-8 h-8 xl:w-10 xl:h-10" />
        <div className="flex flex-col">
          <h3 className="text-base xl:text-lg">{mainName}</h3>
          <p className="text-[13px] xl:text-base">{isGraduate}</p>
        </div>
      </div>
      <section className="flex flex-col">
        <div className="font-semibold text-[20px] leading-6  mb-4 xl:text-2xl">{testimonialOne}</div>
        <div className="text-[13px] xl:text-[17px]">{testimonialTwo}</div>
      </section>
    </div>

  )
}

Layout.propTypes = {
  image: PropTypes.node.isRequired,
  mainName: PropTypes.string.isRequired,
  isGraduate: PropTypes.string.isRequired,
  testimonialOne: PropTypes.string.isRequired,
  testimonialTwo: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
