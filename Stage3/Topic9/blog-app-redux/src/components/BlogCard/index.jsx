import PropTypes from "prop-types";

export default function BlogCard({ title, summary, onReadMore }) {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{summary}</p>
      <button className="blog-btn" onClick={onReadMore}>
        Read More
      </button>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
};