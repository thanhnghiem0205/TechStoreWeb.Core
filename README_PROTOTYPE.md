# Prototype UI redesign

This branch contains a fast prototype of a modern, clean UI using the Tailwind CDN and Alpine.js for light interactions.

How to run locally:

1. Checkout the branch:

   git fetch origin
   git checkout feature/ui-redesign-prototype

2. Run the project (typical .NET run):

   dotnet restore
   dotnet run

3. Open the site (usually http://localhost:5000 or the port your app uses).

Notes:
- This prototype uses the Tailwind CDN for speed. For production, consider installing Tailwind via npm and building a production CSS file.
- Images use placeholders; replace with product images under wwwroot/Images.
- I did not delete .bak files automatically; please review/clean them in the repo if desired. Also consider adding `*.bak` to .gitignore.
