import Unsplash from 'unsplash-js/native';

const APP_ACCESS_KEY = 'YOUR_APP_ACCESS_KEY';
const APP_SECRET = 'YOUR_APP_SECRET';

export default new Unsplash({
  applicationId: APP_ACCESS_KEY,
  secret: APP_SECRET,
});
