const handleErrors = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  };
  
  module.exports = handleErrors;