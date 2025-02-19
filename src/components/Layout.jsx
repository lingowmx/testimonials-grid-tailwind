import PropTypes from "prop-types"

export const Layout = ({ mainName, isGraduate, image, testimonialOne, testimonialTwo, className }) => {
  return (
    <div className="font-barlowSemiCondensed mb-6 shadow-xl border border-green-500">
      <div className={`rounded-xl flex flex-col p-9 ${className}`}>
        <div className="flex gap-4 items-center mb-4">
          <img src={image} alt="" className="rounded-full w-8 h-8" />
          <div className="flex flex-col">
            <h3 className="text-base">{mainName}</h3>
            <p className="text-[13px]">{isGraduate}</p>
          </div>
        </div>
        <section className="flex flex-col">
          <div className="font-semibold text-[20px] leading-6  mb-4">{testimonialOne}</div>
          <div className="text-[13px]">{testimonialTwo}</div>
        </section>
      </div>
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
