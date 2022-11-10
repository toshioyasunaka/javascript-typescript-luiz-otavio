import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`Ctrl + click -> http://localhost:${port}`);
});