# Gold Price Prediction

This project predicts gold prices based on various financial indicators using a Random Forest Regressor model. The application includes a Flask backend for serving predictions and a frontend to interact with the model.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Dataset](#dataset)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Model Training Process](#model-training-process)
- [Results](#results)
- [License](#license)

## Project Overview

The Gold Price Prediction project aims to predict the future gold price (`GLD`) based on various financial indicators such as:

- S&P 500 index (`SPX`)
- United States Oil Fund (`USO`)
- Silver price (`SLV`)
- EUR/USD exchange rate (`EUR/USD`)

This project demonstrates:

- Data preprocessing and model training using scikit-learn's Random Forest Regressor.
- Flask for serving predictions via a REST API.
- React for the frontend UI.

## Technologies Used

- Python
- Flask
- Next.js
- scikit-learn
- pandas
- numpy
- pickle
- seaborn & matplotlib for visualization

## Dataset

The dataset used is a historical financial dataset containing data such as:

- `Date`: Date of the data point
- `SPX`: S&P 500 index
- `USO`: United States Oil Fund
- `SLV`: Silver price
- `EUR/USD`: EUR to USD exchange rate
- `GLD`: Gold price (target variable)

## Project Structure

```
.
├── app.py                         # Flask app for serving predictions
├── gold_price_model.pkl           # Serialized model file
├── gold_price_data.csv            # Dataset file
├── model_training.ipynb           # Jupyter Notebook for model training
├── README.md                      # Project documentation
├── frontend/                      # React/Next.js frontend
    ├── components/
    ├── pages/
    └── ...
```

## Setup and Installation

### Prerequisites

- Python 3.8 or higher
- Node.js and npm for the frontend
- pip for Python package management

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Ayush272002/Gold-Price-Prediction.git
   cd Gold-Price-Prediction
   ```

2. Create a virtual environment and activate it:

   ```bash
   python3 -m venv venv
   source venv/bin/activate   # For Linux/Mac
   venv\Scripts\activate      # For Windows
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask app:
   ```bash
   python app.py
   ```

### Docker Support

### Building and Running the Backend with Docker

The backend application is Dockerized for ease of deployment and scalability. Below are the steps to build and run the backend using Docker:

1. Navigate to the Dockerfile directory:

   ```bash
   cd docker
   ```

2. Build the Docker image:

   ```bash
   docker build -t gold-price-backend .
   ```

3. Run the Docker container:

   ```bash
   docker run -p 5000:5000 gold-price-backend
   ```

   - The Flask application will be accessible at `http://localhost:5000`.

4. (Optional) Run the container in detached mode:
   ```bash
   docker run -d -p 5000:5000 gold-price-backend
   ```

### Frontend Setup

1. Navigate to the `frontend/` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

### Backend

- The backend server runs on `127.0.0.1:5000`.
- Make predictions by sending a POST request to `/predict` or `/predict_api` with JSON data.

### Frontend

- Access the frontend at `http://localhost:3000`.
- Fill in the form fields and click the "Predict Gold Price" button to get predictions.

## Endpoints

### `/predict_api` (POST)

Make predictions by sending a JSON payload:

```json
{
  "data": {
    "SPX": 2700,
    "USO": 14.5,
    "SLV": 15.6,
    "EUR/USD": 1.19
  }
}
```

Response:

```json
{
  "prediction": 1800.45
}
```

### `/predict` (POST)

Another endpoint for making predictions:

```json
{
  "SPX": 2700,
  "USO": 14.5,
  "SLV": 15.6,
  "EUR/USD": 1.19
}
```

Response:

```json
{
  "prediction": 1800.45
}
```

## Model Training Process

### Steps

1. Data exploration and preprocessing:

   - Checked for missing values.
   - Explored feature correlations using visualizations.
   - Split the dataset into training and testing sets.

2. Model Training:

   - Trained a Random Forest Regressor using scikit-learn.

3. Evaluation:

   - Evaluated using metrics like Mean Absolute Error (MAE), Mean Squared Error (MSE), Root Mean Squared Error (RMSE), and R².

4. Serialization:
   - Saved the model using `pickle`.

### Key Metrics

- MAE: 2.1
- MSE: 5.2
- RMSE: 2.28
- R²: 0.92

## Results

- The Random Forest model predicts the gold price with high accuracy based on the provided financial indicators.
- Further improvements can be achieved by trying more complex models or tuning hyperparameters.


## License

This project is licensed under the MIT License. See `LICENSE` for details.
