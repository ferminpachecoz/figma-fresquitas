import "../styles/LoadingCard.css"

const LoadingCard = ({ width = "100%", height = "300px" }) => {
  return (
    <div className="loading-card" style={{ width, height }}>
      <div className="loading-card-image"></div>
      <div className="loading-card-content">
        <div className="loading-card-title"></div>
        <div className="loading-card-description"></div>
        <div className="loading-card-description"></div>
      </div>
    </div>
  )
}

export default LoadingCard
