Here’s an updated version of your `README.md` file, incorporating changes that reflect the use of the web scraper, its configuration, and the email-sending functionality.

---

# Web-Scraper

This repository contains a web scraping tool that allows you to monitor product prices on websites and receive email notifications when prices drop below a specified threshold.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Eli4479/Web-Scrapper.git
   ```

2. Navigate to the project directory:

   ```sh
   cd web-Scrapper
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To use the web scraping tool, follow these steps:

1. Open the `config.json` file located in the project root.

2. Modify the `Url` variable to specify the product URL you want to scrape, and set the desired `WantPrice` below which you wish to receive notifications.

3. Run the script:

   ```sh
   npm start
   ```

4. The script will check the product price every 30 minutes. If the price drops below your specified threshold, you will receive an email with the details.

## Features

- Monitors product prices on e-commerce websites.
- Sends email notifications when the price drops below a specified value.
- Runs automatically at regular intervals.

## Configuration

To configure the scraper, modify the `config.json` file:

```json
{
  "Url": "https://www.example.com/product-page",
  "WantPrice": 5000,
  "Email": "your-email@gmail.com",
  "Password": "password-key"
}
```

- **Url**: The URL of the product page to be monitored.
- **WantPrice**: The price threshold. You will be notified if the product price drops below this value.
- **Email**: Your email address (used to send the notification).
- **Password**: Your email account's password (used for authentication).

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```sh
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```sh
   git commit -m "Add your commit message here"
   ```

4. Push your changes to the branch:

   ```sh
   git push origin feature/your-feature-name
   ```

5. Open a pull request on GitHub.

Please ensure that your code follows the project's coding conventions and include appropriate documentation for any new features or changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This version of the `README.md` is more aligned with the updated functionality of your project, including the price tracking and email notification features.
