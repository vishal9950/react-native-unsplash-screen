import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
  },
  textLogo: {
    flex: 1,
    flexDirection: 'row',
    color: 'white',
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Lobster-Regular',
    paddingTop: 150,
    justifyContent: 'space-around',
  },
  outerView: {
    flex: 1,
    alignItems: 'center',
  },
  creditsView: {
    paddingBottom: 50,
  },
  creditsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    width: '100%',
  },
  creditsRightAlign: {
    textAlign: 'right',
  },
  creditsLeftAlign: {
    textAlign: 'left',
  },
  creditsTouchable: {
    width: 100,
    alignItems: 'center',
  },
  loader: {
    paddingBottom: 30,
  },
});
