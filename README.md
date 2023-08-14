# Mad Genius UI Replication Project

This project aims to replicate a UI composition provided by Mad Genius, a company known for their design expertise. The project involves reconstructing the provided design using functional elements, employing various programming languages and frameworks. The technologies used for this project are Next.js and Tailwind.

## Getting Started

To access the project, follow these steps:

1. Open Visual Studio Code or any suitable code editor.
2. In the terminal, navigate to the desired project directory.
3. Run the following command to create a new Next.js application:
   ```
   npx create-next-app@latest
   ```
4. During the setup process, you will encounter several questions. Respond as follows:
   - Answer "no" to all questions except those related to Tailwind and the source directory.
5. Once the setup is complete, navigate to the frontend directory:
   ```
   cd frontend
   ```
6. Start the development server with the following command:
   ```
   npm run dev
   ```
7. A link will appear in the terminal, such as `http://localhost:3000`. Open this link in your web browser to view the project.


## Header Section
At the top half of the page, you will find a header with buttons featuring a hover effect. Additionally, there's a large photo displayed using overflow hidden and margin adjustments to create a cut-off appearance, similar to the design provided in the UI composition.

## Content Section
Scrolling down, you'll come across three images accompanied by text and "Learn More" buttons, all displayed in columns. To ensure uniformity, the images were set to specific widths and heights before being placed within div elements with predetermined dimensions and margins.

## Slideshow
The project incorporates a slideshow functionality using JavaScript. The data for quotes, person names, and titles is stored in a variable called "data." These details are then integrated into the HTML, and functions for the previous and next buttons were implemented to control the slideshow's navigation.

## Footer
The footer section is structured using columns to organize the information. It includes the company logo and relevant images placed strategically within the layout.

## Conclusion

This project aims replicates the UI composition provided by Mad Genius. By utilizing Next.js and Tailwind technologies, functional elements were integrated to achieve the desired design. The project showcases skills in front-end development, responsive design, and JavaScript interactivity.
