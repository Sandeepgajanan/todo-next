import "./globals.css";

export const metadata = {
  title: 'Todo App',
  description: 'A simple todo list application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
